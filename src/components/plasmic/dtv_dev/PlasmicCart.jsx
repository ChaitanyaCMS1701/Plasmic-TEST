// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMuK5QvKwWGrkw9DYJKXqS
// Component: GyNHfM4sC7dg
import * as React from "react";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicImg as PlasmicImg__,
  PlasmicPageGuard as PlasmicPageGuard__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  get as $stateGet,
  set as $stateSet,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import CartComponent3 from "../../CartComponent3"; // plasmic-import: DmT0Nv4lo2K2/component
import Button from "../../Button"; // plasmic-import: Humveg51WdE0/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sMuK5QvKwWGrkw9DYJKXqS/projectcss
import sty from "./PlasmicCart.module.css"; // plasmic-import: GyNHfM4sC7dg/css

createPlasmicElementProxy;

export const PlasmicCart__VariantProps = new Array();

export const PlasmicCart__ArgProps = new Array("test");

const $$ = {};

function PlasmicCart__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          test: `/cart-2`
        },
        props.args
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "cart",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "cartElement",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox___4AtDs)}>
            <CartComponent3
              data-plasmic-name={"cartComponent3"}
              data-plasmic-override={overrides.cartComponent3}
              cartElement={(() => {
                try {
                  return $state.cartElement;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return 0;
                  }
                  throw e;
                }
              })()}
              className={classNames("__wab_instance", sty.cartComponent3)}
            />

            <div className={classNames(projectcss.all, sty.freeBox__xbxCl)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__f92J0
                )}
              >
                {"Products List : "}
              </div>
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"185px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"358px"}
                loading={"lazy"}
                src={
                  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8fDA%3D"
                }
              />

              <div className={classNames(projectcss.all, sty.freeBox__tk0Jp)}>
                <Button
                  className={classNames("__wab_instance", sty.button__jBqXe)}
                  link={undefined}
                  onClick={async event => {
                    const $steps = {};
                    $steps["updateVariable"] = true
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ["cartElement"]
                            },
                            operation: 2
                          };
                          return (({
                            variable,
                            value,
                            startIndex,
                            deleteCount
                          }) => {
                            if (!variable) {
                              return;
                            }
                            const { objRoot, variablePath } = variable;
                            const oldValue = $stateGet(objRoot, variablePath);
                            $stateSet(objRoot, variablePath, oldValue + 1);
                            return oldValue + 1;
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["updateVariable"] != null &&
                      typeof $steps["updateVariable"] === "object" &&
                      typeof $steps["updateVariable"].then === "function"
                    ) {
                      $steps["updateVariable"] = await $steps["updateVariable"];
                    }
                  }}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fFqw
                    )}
                  >
                    {"Add To Cart"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__wL4)}
                  onClick={async event => {
                    const $steps = {};
                    $steps["updateCartElement"] =
                      $state.cartElement !== 0
                        ? (() => {
                            const actionArgs = {
                              variable: {
                                objRoot: $state,
                                variablePath: ["cartElement"]
                              },
                              operation: 3
                            };
                            return (({
                              variable,
                              value,
                              startIndex,
                              deleteCount
                            }) => {
                              if (!variable) {
                                return;
                              }
                              const { objRoot, variablePath } = variable;
                              const oldValue = $stateGet(objRoot, variablePath);
                              $stateSet(objRoot, variablePath, oldValue - 1);
                              return oldValue - 1;
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                    if (
                      $steps["updateCartElement"] != null &&
                      typeof $steps["updateCartElement"] === "object" &&
                      typeof $steps["updateCartElement"].then === "function"
                    ) {
                      $steps["updateCartElement"] = await $steps[
                        "updateCartElement"
                      ];
                    }
                  }}
                >
                  {"Remove From Cart"}
                </Button>
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__yx2Oy)}>
            <a
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(projectcss.all, projectcss.a, sty.link)}
              href={`/cart-2`}
              onClick={async event => {
                const $steps = {};
                $steps["updateCart"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["cart"]
                        },
                        operation: 0
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;
                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateCart"] != null &&
                  typeof $steps["updateCart"] === "object" &&
                  typeof $steps["updateCart"].then === "function"
                ) {
                  $steps["updateCart"] = await $steps["updateCart"];
                }
              }}
              props={(() => {
                try {
                  return $state.cartElement;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
            >
              <Button
                className={classNames("__wab_instance", sty.button__b7LKa)}
                link={args.test}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gWYt8
                  )}
                >
                  {"Next"}
                </div>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "cartComponent3", "img", "link"],
  cartComponent3: ["cartComponent3"],
  img: ["img"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCart__ArgProps,
          internalVariantPropNames: PlasmicCart__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCart__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCart";
  } else {
    func.displayName = `PlasmicCart.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard(WrappedComponent) {
  const PageGuard = props => (
    <PlasmicPageGuard__
      minRole={null}
      appId={"sMuK5QvKwWGrkw9DYJKXqS"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth(WrappedComponent) {
  const WithUsePlasmicAuthComponent = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "sMuK5QvKwWGrkw9DYJKXqS"
    });
    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicCart = Object.assign(
  // Top-level PlasmicCart renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    cartComponent3: makeNodeComponent("cartComponent3"),
    img: makeNodeComponent("img"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicCart
    internalVariantProps: PlasmicCart__VariantProps,
    internalArgProps: PlasmicCart__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCart;
/* prettier-ignore-end */
