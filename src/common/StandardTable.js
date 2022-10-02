import { flexRender } from "@tanstack/react-table";
import clsx from "clsx";
import TablePagination from "./TablePagination";
import LoadingContent from "./LoadingContent";
import "./StandardTable.css";

/**
 *
 * @param {StandardTableProps} props
 */
function StandardTable(props) {
  const {
    instance,
    classes,
    renderHeader,
    renderBody,
    renderFooter,
    renderPagination,
    loading,
    error,
    ...rest
  } = props;

  const isLoadingContent = loading || error;

  return (
    <div {...{ className: clsx("StandardTable", classes?.root) }}>
      <table
        {...{
          className: clsx("StandardTable__table", classes?.table),
          style: {
            // width: instance.getCenterTotalSize(),
          },
        }}
      >
        {renderHeader?.(instance, props)}
        {!isLoadingContent && (
          <>
            {renderBody?.(instance, props)}
            {renderFooter?.(instance, props)}
          </>
        )}
      </table>
      <LoadingContent {...{ loading, error, ...rest }} />
      {renderPagination?.(instance, props)}
    </div>
  );
}

/**
 * @type {StandardTableProps}
 */
StandardTable.defaultProps = {
  renderHeader,
  renderHeaderGroup,
  renderHeaderCell,
  renderBody,
  renderRow,
  renderCell,
  renderFooter,
  renderFooterGroup,
  renderFooterCell,
  renderPagination,
  flexRender,
};

export default StandardTable;

/**
 * @type {StandardTableProps['renderHeader']}
 */
function renderHeader(instance, props) {
  return (
    <thead
      {...{
        className: clsx("StandardTable__table__thead", props.classes?.thead),
      }}
    >
      {instance
        .getHeaderGroups()
        .map((headerGroup) =>
          props.renderHeaderGroup(headerGroup, instance, props)
        )}
    </thead>
  );
}

/**
 * @type {StandardTableProps['renderHeaderGroup']}
 */
function renderHeaderGroup(headerGroup, instance, props) {
  return (
    <tr
      {...{
        key: headerGroup.id,
        className: clsx(
          "StandardTable__table__thead__tr",
          props.classes?.thead__tr
        ),
      }}
    >
      {headerGroup.headers.map((header) =>
        props.renderHeaderCell(header, instance, props)
      )}
    </tr>
  );
}

/**
 * @type {StandardTableProps['renderHeaderCell']}
 */
function renderHeaderCell(header, instance, props) {
  return (
    <th
      {...{
        key: header.id,
        colSpan: header.colSpan,
        className: clsx(
          "StandardTable__table__thead__tr__th",
          props.classes?.thead__tr_th
        ),
        style: {
          width: header.getSize(),
        },
      }}
    >
      {header.isPlaceholder
        ? null
        : props.flexRender(header.column.columnDef.header, header.getContext())}
      <div
        {...{
          onMouseDown: header.getResizeHandler(),
          onTouchStart: header.getResizeHandler(),
          className: `resizer ${
            header.column.getIsResizing() ? "isResizing" : ""
          }`,
          style: {
            transform:
              instance.options.columnResizeMode === "onEnd" &&
              header.column.getIsResizing()
                ? `translateX(${
                    instance.getState().columnSizingInfo.deltaOffset
                  }px)`
                : "",
          },
        }}
      />
    </th>
  );
}

/**
 * @type {StandardTableProps['renderBody']}
 */
function renderBody(instance, props) {
  return (
    <tbody
      {...{
        className: clsx("StandardTable__table__tbody", props.classes?.tbody),
      }}
    >
      {instance
        .getRowModel()
        .rows.map((row) => props.renderRow(row, instance, props))}
    </tbody>
  );
}

/**
 * @type {StandardTableProps['renderRow']}
 */
function renderRow(row, instance, props) {
  return (
    <tr
      {...{
        key: row.id,
        className: clsx(
          "StandardTable__table__tbody__tr",
          props.classes?.tbody__tr
        ),
      }}
    >
      {row
        .getVisibleCells()
        .map((cell) => props.renderCell(cell, instance, props))}
    </tr>
  );
}

/**
 * @type {StandardTableProps['renderCell']}
 */
function renderCell(cell, instance, props) {
  return (
    <td
      {...{
        key: cell.id,
        style: {
          width: cell.column.getSize(),
        },
        className: clsx(
          "StandardTable__table__tbody__tr__td",
          props.classes?.tbody__tr__td
        ),
      }}
    >
      {props.flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
}

/**
 * @type {StandardTableProps['renderFooter']}
 */
function renderFooter(instance, props) {
  return (
    <tfoot
      {...{
        className: clsx("StandardTable__table__tfoot", props.classes?.tfoot),
      }}
    >
      {instance
        .getFooterGroups()
        .map((footerGroup) =>
          props.renderFooterGroup(footerGroup, instance, props)
        )}
    </tfoot>
  );
}

/**
 * @type {StandardTableProps['renderFooterGroup']}
 */
function renderFooterGroup(footerGroup, instance, props) {
  return (
    <tr
      {...{
        key: footerGroup.id,
        className: clsx(
          "StandardTable__table__tfoot__tr",
          props.classes?.tfoot__tr
        ),
      }}
    >
      {footerGroup.headers.map((footer) =>
        props.renderFooterCell(footer, instance, props)
      )}
    </tr>
  );
}

/**
 * @type {StandardTableProps['renderFooterCell']}
 */
function renderFooterCell(header, instance, props) {
  return (
    <th
      {...{
        key: header.id,
        colSpan: header.colSpan,
        className: clsx(
          "StandardTable__table__tfoot__tr__th",
          props.classes?.tfoot__tr__th
        ),
        style: {
          width: header.getSize(),
        },
      }}
    >
      {header.isPlaceholder
        ? null
        : props.flexRender(header.column.columnDef.footer, header.getContext())}
    </th>
  );
}

/**
 * @type {StandardTableProps['renderPagination']}
 */
function renderPagination(instance, props) {
  return (
    <TablePagination
      {...{ instance, className: clsx("StandardTable__pagination") }}
    />
  );
}

/**
 * @typedef {import("@tanstack/react-table").Table<any>} Table
 */

/**
 * @typedef {import("react").ReactNode} ReactNode
 */

/**
 * @typedef  {{
 * instance: Table
 * classes: {[P in 'root' | 'table' | 'thead' | 'thead__tr' | 'thead__tr_th' | 'tbody' | 'tfoot']: string};
 * flexRender: Function;
 * renderHeader: (instance: Table, props: StandardTableProps) => ReactNode;
 * renderHeaderGroup: (headerGroup: import("@tanstack/react-table").HeaderGroup, instance: Table, props: StandardTableProps) => ReactNode;
 * renderHeaderCell: (header: import("@tanstack/react-table").Header<any>, instance: Table, props: StandardTableProps) => ReactNode;
 * renderBody: (instance: Table, props: StandardTableProps) => ReactNode;
 * renderRow: (row: import("@tanstack/react-table").Row, instance: Table, props: StandardTableProps) => ReactNode;
 * renderCell: (header: import("@tanstack/react-table").Cell, instance: Table, props: StandardTableProps) => ReactNode;
 * renderFooter: (instance: Table, props: StandardTableProps) => ReactNode;
 * renderFooterGroup: (footerGroup: import("@tanstack/react-table").HeaderGroup, instance: Table, props: StandardTableProps) => ReactNode;
 * renderFooterCell: (footer: import("@tanstack/react-table").Header<any>, instance: Table, props: StandardTableProps) => ReactNode;
 * renderPagination: (instance: Table, props: StandardTableProps)  => ReactNode
 * } & import("./LoadingContent").LoadingContentProps} StandardTableProps
 */
