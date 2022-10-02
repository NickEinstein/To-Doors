import StandardTable from "./StandardTable";
import GridTable from "./GridTable";

/**
 * @template {'auto' | 'grid' | 'standard' | 'tree'} V
 * @param {DynamicTableProps<V>} props
 */
function DynamicTable(props) {
  const { view, ...rest } = props;

  if (!props.instance) return null;

  if (view === "grid") {
    return <GridTable {...rest} />;
  }

  if (view === "tree") {
    return null;
  }

  return <StandardTable {...props} />;
}

DynamicTable.defaultProps = {
  view: "standard",
};

export default DynamicTable;

/**
 * @template V
 * @typedef {{
 *  view: V
 * } & (V extends 'grid' ? import("./GridTable").GridTableProps : V extends 'tree' ? {} : import("./StandardTable").StandardTableProps)} DynamicTableProps<V>
 */
