import { IconButton, Icon } from "@mui/material";
import clsx from "clsx";
import "./TablePagination.css";

/**
 *
 * @param {TablePaginationProps} props
 */
function TablePagination(props) {
  const { instance, className, ...rest } = props;

  return (
    <div className={clsx("TablePagination", className)} {...rest}>
      <span className="text-paragraph mr-4">
        {instance.getState().pagination?.pageSize *
          instance.getState().pagination?.pageIndex +
          1}{" "}
        -{" "}
        {instance.getState().pagination?.pageSize *
          (instance.getState().pagination?.pageIndex + 1)}{" "}
        of{" "}
        {instance.options.manualPagination
          ? instance.options?.dataCount || 0
          : instance.getPrePaginationRowModel().rows.length}
      </span>
      <IconButton
        color="inherit"
        size="small"
        onClick={() => instance.setPageIndex(0)}
        disabled={!instance.getCanPreviousPage()}
      >
        <Icon>first_page</Icon>
      </IconButton>
      <IconButton
        color="inherit"
        size="small"
        onClick={() => instance.previousPage()}
        disabled={!instance.getCanPreviousPage()}
      >
        <Icon>navigate_before</Icon>
      </IconButton>
      <div className="rounded w-8 h-8 flex justify-center items-center">
        <h5 className="">{instance.getState()?.pagination?.pageIndex + 1}</h5>
      </div>
      <IconButton
        color="inherit"
        size="small"
        onClick={() => instance.nextPage()}
        disabled={!instance.getCanNextPage()}
      >
        <Icon>navigate_next</Icon>
      </IconButton>
      <IconButton
        color="inherit"
        size="small"
        onClick={() => instance.setPageIndex(instance.getPageCount() - 1)}
        disabled={!instance.getCanNextPage()}
      >
        <Icon>last_page</Icon>
      </IconButton>
    </div>
  );
}

export default TablePagination;

/**
 * @typedef {{instance: import("@tanstack/react-table").Table<any>} & import("react").ComponentPropsWithoutRef<'div'>} TablePaginationProps
 */
