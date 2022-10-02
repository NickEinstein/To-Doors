import { Paper, List, ListItem, ListItemText } from "@mui/material";
import clsx from "clsx";
import LoadingContent from "./LoadingContent";
import TablePagination from "./TablePagination";
import TableEmptyContent from "./TableEmptyContent";
import "./GridTable.css";

/**
 *
 * @param {GridTableProps} props
 */
function GridTable(props) {
  const { instance, loading, error, onMount, onReload, renderContent } = props;

  return (
    <div className="GridTable">
      <LoadingContent
        loading={loading}
        error={error}
        onMount={onMount}
        onReload={onReload}
      >
        {() => renderContent(instance, props)}
      </LoadingContent>
    </div>
  );
}

/** @type {GridTableProps} */
GridTable.defaultProps = {
  classes: {},
  renderContent,
  renderEmptyContent,
  renderItem,
  renderItemBody,
  renderItemField,
  renderItemFieldValue,
  renderItemFieldKey,
  renderItemFooter,
  renderItemHeader,
  renderPagination,
};

export default GridTable;

function renderContent(instance, props) {
  return (instance.page || instance.rows).length ? (
    <>
      <div className={clsx("GridTable__content", props?.classes?.content)}>
        {(instance.page || instance.rows).map((row) => {
          instance.prepareRow(row);
          return props.renderItem?.(row, instance, props);
        })}
      </div>
      {props?.renderPagination?.(instance, props)}
    </>
  ) : (
    <TableEmptyContent />
  );
}

function renderItem(item, instance, props) {
  return (
    <Paper key={item.index} className={clsx("GridTable__content__item")}>
      {props?.renderItemHeader?.(item, instance, props)}
      {props?.renderItemBody(item, instance, props)}
      {props?.renderItemFooter(item, instance, props)}
    </Paper>
  );
}

function renderItemHeader(params) {
  return (
    <div className="GridTable__content__item__header">
      {/* {typeof header === "function" ? header(row, instance) : header} */}
    </div>
  );
}

function renderItemBody(item, instance, props) {
  return (
    <List dense>
      {item.cells.map((cell) =>
        props.renderItemField?.(cell, item, instance, props)
      )}
    </List>
  );
}

function renderItemField(cell, item, instance, props) {
  return (
    <ListItem key={cell.column.id}>
      <ListItemText
        primary={props?.renderItemFieldKey?.(cell, item, instance, props)}
        secondary={props?.renderItemFieldValue?.(cell, item, instance, props)}
        primaryTypographyProps={{ className: "font-bold" }}
      />
    </ListItem>
  );
}

function renderItemFieldKey(cell) {
  return cell.render("Header");
}

function renderItemFieldValue(cell) {
  return cell.render("Cell");
}

function renderItemFooter(item) {
  return (
    <div className="GridTable__content__item__footer">
      {/* {typeof footer === "function" ? footer?.(row, instance) : footer} */}
    </div>
  );
}

function renderPagination(instance) {
  if (instance.disablePagination) {
    return null;
  }
  return (
    <div className="GridTable__pagination">
      <TablePagination instance={instance} />
    </div>
  );
}

function renderEmptyContent() {
  return <TableEmptyContent />;
}

/**
 * @typedef {{
 * normalizedRowCells: {[id: string]: import("react-table").Cell<any, any>}
 * } & import("react-table").Row<any>} Item
 */

/**
 * @typedef {{
 * instance: TableInstance;
 * renderContent: (instance: TableInstance; props: GridTableItemProps) => import("react").ReactNode;
 * renderItem: (item: Item; instance: TableInstance; props: GridTableItemProps) => import("react").ReactNode;
 * renderItemHeader: (item: Item; instance: TableInstance; props: GridTableItemProps) => import("react").ReactNode;
 * renderItemBody: (item: Item; instance: TableInstance; props: GridTableItemProps) => import("react").ReactNode;
 * renderItemField: (cell: import("react-table").Cell<any; any>; item: Item; instance: TableInstance; props: GridTableItemProps) => import("react").ReactNode;
 * renderItemFieldKey: (cell: import("react-table").Cell<any; any>; item: Item; instance: TableInstance; props: GridTableItemProps) => import("react").ReactNode;
 * renderItemFieldValue: (cell: import("react-table").Cell<any; any>; item: Item; instance: TableInstance; props: GridTableItemProps) => import("react").ReactNode;
 * renderItemFooter: (item: Item; instance: TableInstance; props: GridTableItemProps) => import("react").ReactNode;
 * renderPagination: (instance: TableInstance; props: GridTableProps) => import("react").ReactNode;
 * renderEmptyContent: (instance: TableInstance, props: GridTableProps) => import("react").ReactNode;
 * } & import("./LoadingContent").LoadingContentProps} GridTableProps
 */
