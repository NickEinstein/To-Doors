import {
  Breadcrumbs,
  Typography,
  Link as MuiLink,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import clsx from "clsx";
import "./PageHeader.css";
import { Icon as ICIcon } from "@iconify/react";

/**
 *
 * @param {PageHeaderProps} props
 */
function PageHeader(props) {
  const {
    title,
    className,
    breadcrumbs,
    children,
    classes,
    beforeTitle,
    ...rest
  } = props;
  return (
    <>
      <Toolbar
        disableGutters
        className={clsx("PageHeader", className, classes?.root)}
        {...rest}
      >
        <div>
          <div>
            {beforeTitle}
            <Typography
              variant="h4"
              className={clsx("PageHeader__title", classes?.title)}
            >
              {title}
            </Typography>
            <div className={clsx("PageHeader__content", classes?.rootContent)}>
              {children}
            </div>
          </div>

          <div>
            {!!breadcrumbs.length && (
              <Breadcrumbs
                className="mt-4"
                separator={<ICIcon icon="ci:dot-02-s" />}
              >
                {breadcrumbs.map((breadcrumb, key) => {
                  const isPage = key === breadcrumbs.length - 1;

                  if (isPage) {
                    return (
                      <Typography
                        key={key}
                        variant="body2 capitalize text-gray-400"
                      >
                        {breadcrumb.name}
                      </Typography>
                    );
                  }

                  return (
                    <MuiLink
                      key={key}
                      sx={{
                        color: "#212B36",
                      }}
                      component={Link}
                      to={breadcrumb.to || "#"}
                    >
                      {breadcrumb.name}
                    </MuiLink>
                  );
                })}
              </Breadcrumbs>
            )}
          </div>
        </div>
      </Toolbar>
      {!!children && (
        <Toolbar
          disableGutters
          className={clsx("PageHeader-content", classes?.content)}
        >
          {children}
        </Toolbar>
      )}
    </>
  );
}

PageHeader.defaultProps = {
  breadcrumbs: [],
  classes: {},
};

export default PageHeader;

/**
 * @typedef {{
 * breadcrumbs: {name: string, to: string}[];
 * classes: {root: string; title: string; content: string; rootContent: string}
 * beforeTitle: import("react").ReactNode
 * } & import("react").ComponentPropsWithoutRef<'div'>} PageHeaderProps
 */
