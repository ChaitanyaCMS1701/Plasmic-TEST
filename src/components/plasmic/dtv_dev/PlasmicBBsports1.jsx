// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMuK5QvKwWGrkw9DYJKXqS
// Component: 02c6mnCcd3D_
import * as React from "react";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicImg as PlasmicImg__,
  PlasmicPageGuard as PlasmicPageGuard__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  initializeCodeComponentStates,
  initializePlasmicStates,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";
import BbsportsNavbar from "../../BbsportsNavbar"; // plasmic-import: 1H_RiyunFQyd/component
import { DataFetcher } from "@plasmicpkgs/plasmic-query";
import Button from "../../Button"; // plasmic-import: Humveg51WdE0/component
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import BBsportsFooter2 from "../../BBsportsFooter2"; // plasmic-import: DmzRb63NDqeE/component
import Fotter from "../../Fotter"; // plasmic-import: m2U6ZOt1kBnV/component
import { useScreenVariants as useScreenVariantscVfb4YQ8QuPw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CVfb4yQ8quPw/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sMuK5QvKwWGrkw9DYJKXqS/projectcss
import sty from "./PlasmicBBsports1.module.css"; // plasmic-import: 02c6mnCcd3D_/css
import blankImagepngMDaRb3Hx58Wy from "./images/blankImagepng.png"; // plasmic-import: mDaRB3hx58WY/picture

createPlasmicElementProxy;

export const PlasmicBBsports1__VariantProps = new Array();

export const PlasmicBBsports1__ArgProps = new Array();

const $$ = {};

function PlasmicBBsports1__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
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
        path: "input[][].value",
        type: "private",
        variableType: "text",
        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
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
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscVfb4YQ8QuPw()
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
          onClick={async event => {
            const $steps = {};
            $steps["updateStateVariable"] = true
              ? (() => {
                  const actionArgs = {};
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;
                    undefined;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateStateVariable"] != null &&
              typeof $steps["updateStateVariable"] === "object" &&
              typeof $steps["updateStateVariable"].then === "function"
            ) {
              $steps["updateStateVariable"] = await $steps[
                "updateStateVariable"
              ];
            }
          }}
        >
          <div className={classNames(projectcss.all, sty.freeBox__qFub1)}>
            <BbsportsNavbar
              data-plasmic-name={"bbsportsNavbar"}
              data-plasmic-override={overrides.bbsportsNavbar}
              className={classNames("__wab_instance", sty.bbsportsNavbar)}
            />

            <div className={classNames(projectcss.all, sty.freeBox__xkVZx)}>
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__vbTi1
                )}
              >
                {"Before you go TOMOO,check out these offers."}
              </h1>
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: blankImagepngMDaRb3Hx58Wy,
                  fullWidth: 480,
                  fullHeight: 270,
                  aspectRatio: undefined
                }}
              />

              <div className={classNames(projectcss.all, sty.freeBox__cYbmz)}>
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1__aRmm
                  )}
                >
                  {"Upgrade to season pas  hjghjgjh for free!"}
                </h1>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4Pwb1
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>
                      {
                        "Use your current payment info and upgrade your subscription? You will have access your free session subscriptiion through "
                      }
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"May 30 2024."}
                    </span>
                    <React.Fragment>
                      {
                        " You will auto-renew before the start of the NBA/NHL seasons. Your billing details will update to the following"
                      }
                    </React.Fragment>
                  </React.Fragment>
                </div>
                <a
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  className={classNames(projectcss.all, projectcss.a, sty.link)}
                >
                  <DataFetcher
                    body={{
                      GetProductsListRequestMessage: {
                        apiUser: "popsical@yopmail.com",
                        apiPassword: "Password1@",
                        channelPartnerID: "POPSICAL",
                        prodAreaCode: "001",
                        returnAttributes: "T",
                        returnAppChannels: "T"
                      }
                    }}
                    className={classNames(
                      "__wab_instance",
                      sty.httpRestApiFetcher__ofJj4
                    )}
                    dataName={"fetchedData"}
                    errorDisplay={
                      <DataCtxReader__>
                        {$ctx => "Error fetching data"}
                      </DataCtxReader__>
                    }
                    errorName={"fetchError"}
                    headers={{
                      "Content-Type": "application/json",
                      Accept: "application/json"
                    }}
                    loadingDisplay={
                      <DataCtxReader__>{$ctx => "Loading..."}</DataCtxReader__>
                    }
                    method={"POST"}
                    noLayout={false}
                    url={"https://rest-dev.evergent.com/ccb/getProductsList"}
                  >
                    <DataCtxReader__>
                      {$ctx => (
                        <Button
                          data-plasmic-name={"acceptoffer"}
                          data-plasmic-override={overrides.acceptoffer}
                          className={classNames(
                            "__wab_instance",
                            sty.acceptoffer
                          )}
                          link={(() => {
                            try {
                              return undefined;
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
                          onClick={async event => {
                            const $steps = {};
                            $steps["httpGet"] = true
                              ? (() => {
                                  const actionArgs = {
                                    dataOp: {
                                      sourceId: "7umYyasFHzhotvCU1HCmCe",
                                      opId: "fb44b7c6-7011-4a6b-af1d-94872e15467c",
                                      userArgs: {},
                                      cacheKey: null,
                                      invalidatedKeys: null,
                                      roleId: null
                                    }
                                  };
                                  return (async ({
                                    dataOp,
                                    continueOnError
                                  }) => {
                                    try {
                                      const response =
                                        await executePlasmicDataOp(dataOp, {
                                          userAuthToken:
                                            dataSourcesCtx?.userAuthToken,
                                          user: dataSourcesCtx?.user
                                        });
                                      await plasmicInvalidate(
                                        dataOp.invalidatedKeys
                                      );
                                      return response;
                                    } catch (e) {
                                      if (!continueOnError) {
                                        throw e;
                                      }
                                      return e;
                                    }
                                  })?.apply(null, [actionArgs]);
                                })()
                              : undefined;
                            if (
                              $steps["httpGet"] != null &&
                              typeof $steps["httpGet"] === "object" &&
                              typeof $steps["httpGet"].then === "function"
                            ) {
                              $steps["httpGet"] = await $steps["httpGet"];
                            }
                            $steps["goToBBsubscriptionUpgrade"] = $steps.httpGet
                              ? (() => {
                                  const actionArgs = {
                                    destination: `/new-page-2`
                                  };
                                  return (({ destination }) => {
                                    if (
                                      typeof destination === "string" &&
                                      destination.startsWith("#")
                                    ) {
                                      document
                                        .getElementById(destination.substr(1))
                                        .scrollIntoView({ behavior: "smooth" });
                                    } else {
                                      location.assign(destination);
                                    }
                                  })?.apply(null, [actionArgs]);
                                })()
                              : undefined;
                            if (
                              $steps["goToBBsubscriptionUpgrade"] != null &&
                              typeof $steps["goToBBsubscriptionUpgrade"] ===
                                "object" &&
                              typeof $steps["goToBBsubscriptionUpgrade"]
                                .then === "function"
                            ) {
                              $steps["goToBBsubscriptionUpgrade"] =
                                await $steps["goToBBsubscriptionUpgrade"];
                            }
                            $steps["useIntegration"] = true
                              ? (() => {
                                  const actionArgs = {};
                                  return (async ({
                                    dataOp,
                                    continueOnError
                                  }) => {
                                    try {
                                      const response =
                                        await executePlasmicDataOp(dataOp, {
                                          userAuthToken:
                                            dataSourcesCtx?.userAuthToken,
                                          user: dataSourcesCtx?.user
                                        });
                                      await plasmicInvalidate(
                                        dataOp.invalidatedKeys
                                      );
                                      return response;
                                    } catch (e) {
                                      if (!continueOnError) {
                                        throw e;
                                      }
                                      return e;
                                    }
                                  })?.apply(null, [actionArgs]);
                                })()
                              : undefined;
                            if (
                              $steps["useIntegration"] != null &&
                              typeof $steps["useIntegration"] === "object" &&
                              typeof $steps["useIntegration"].then ===
                                "function"
                            ) {
                              $steps["useIntegration"] = await $steps[
                                "useIntegration"
                              ];
                            }
                          }}
                          submitsForm={false}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__osNg7
                            )}
                          >
                            {"ACCEPT OFFER"}
                          </div>
                        </Button>
                      )}
                    </DataCtxReader__>
                  </DataFetcher>
                </a>
                <DataFetcher
                  body={{
                    GetProductsListRequestMessage: {
                      apiUser: "popsical@yopmail.com",
                      apiPassword: "Password1@",
                      channelPartnerID: "POPSICAL",
                      prodAreaCode: "001",
                      returnAttributes: "T",
                      returnAppChannels: "T"
                    }
                  }}
                  className={classNames(
                    "__wab_instance",
                    sty.httpRestApiFetcher__psWb
                  )}
                  dataName={"fetchedData"}
                  errorDisplay={
                    <DataCtxReader__>
                      {$ctx => "Error fetching data"}
                    </DataCtxReader__>
                  }
                  errorName={"fetchError"}
                  headers={{
                    "Content-Type": "application/json",
                    Accept: "application/json"
                  }}
                  loadingDisplay={
                    <DataCtxReader__>{$ctx => "Loading..."}</DataCtxReader__>
                  }
                  method={"POST"}
                  noLayout={false}
                  url={"https://rest-dev.evergent.com/ccb/getProductsList"}
                >
                  <DataCtxReader__>
                    {$ctx =>
                      (_par =>
                        !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                        (() => {
                          try {
                            return $ctx.fetchedData
                              .GetProductsListResponseMessage
                              .productsResponseMessage[0];
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return [];
                            }
                            throw e;
                          }
                        })()
                      ).map((__plasmic_item_0, __plasmic_idx_0) => {
                        const currentItem = __plasmic_item_0;
                        const currentIndex = __plasmic_idx_0;
                        return (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__v9TAs
                            )}
                            key={currentIndex}
                          >
                            {(_par =>
                              !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                              (() => {
                                try {
                                  return $ctx.fetchedData
                                    .GetProductsListResponseMessage
                                    .productsResponseMessage;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return [];
                                  }
                                  throw e;
                                }
                              })()
                            ).map((__plasmic_item_1, __plasmic_idx_1) => {
                              const currentItem = __plasmic_item_1;
                              const currentIndex = __plasmic_idx_1;
                              return (() => {
                                const child$Props = {
                                  className: classNames(
                                    "__wab_instance",
                                    sty.input
                                  ),
                                  key: currentIndex,
                                  onChange:
                                    generateStateOnChangePropForCodeComponents(
                                      $state,
                                      "value",
                                      [
                                        "input",
                                        __plasmic_idx_0,
                                        __plasmic_idx_1,
                                        "value"
                                      ],

                                      AntdInput_Helpers
                                    ),
                                  value: generateStateValueProp($state, [
                                    "input",
                                    __plasmic_idx_0,
                                    __plasmic_idx_1,
                                    "value"
                                  ])
                                };
                                initializeCodeComponentStates(
                                  $state,
                                  [
                                    {
                                      name: "value",
                                      plasmicStateName: "input[][].value"
                                    }
                                  ],

                                  [__plasmic_idx_0, __plasmic_idx_1],
                                  AntdInput_Helpers ?? {},
                                  child$Props
                                );
                                initializePlasmicStates(
                                  $state,
                                  [
                                    {
                                      name: "input[][].value",
                                      initFunc: ({
                                        $props,
                                        $state,
                                        $queries
                                      }) =>
                                        (() => {
                                          try {
                                            return $ctx.fetchedData
                                              .GetProductsListResponseMessage
                                              .productsResponseMessage;
                                          } catch (e) {
                                            if (
                                              e instanceof TypeError ||
                                              e?.plasmicType ===
                                                "PlasmicUndefinedDataError"
                                            ) {
                                              return undefined;
                                            }
                                            throw e;
                                          }
                                        })()
                                    }
                                  ],

                                  [__plasmic_idx_0, __plasmic_idx_1]
                                );
                                return (
                                  <AntdInput
                                    data-plasmic-name={"input"}
                                    data-plasmic-override={overrides.input}
                                    {...child$Props}
                                  />
                                );
                              })();
                            })}
                          </div>
                        );
                      })
                    }
                  </DataCtxReader__>
                </DataFetcher>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lpr1N
                )}
              >
                {
                  "Disclaimer:A disclaimer is generally any statement intended to specify or delimit the scope of rights and obligations that may be exercised and enforced by parties in a legally recognized relationship."
                }
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__uHcC)}>
            <BBsportsFooter2
              data-plasmic-name={"bBsportsFooter2"}
              data-plasmic-override={overrides.bBsportsFooter2}
              className={classNames("__wab_instance", sty.bBsportsFooter2)}
            />

            <Fotter
              data-plasmic-name={"bBsportsFooter"}
              data-plasmic-override={overrides.bBsportsFooter}
              className={classNames("__wab_instance", sty.bBsportsFooter)}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__a2XZv)}>
            <DataFetcher
              body={{
                GetProductsListRequestMessage: {
                  apiUser: "popsical@yopmail.com",
                  apiPassword: "Password1@",
                  channelPartnerID: "POPSICAL",
                  prodAreaCode: "001",
                  returnAttributes: "T",
                  returnAppChannels: "T"
                }
              }}
              className={classNames(
                "__wab_instance",
                sty.httpRestApiFetcher__qSn1E
              )}
              dataName={"fetchedData"}
              errorDisplay={
                <DataCtxReader__>
                  {$ctx => "Error fetching data"}
                </DataCtxReader__>
              }
              errorName={"fetchError"}
              headers={{
                "Content-Type": "application/json",
                Accept: "application/json"
              }}
              loadingDisplay={
                <DataCtxReader__>{$ctx => "Loading..."}</DataCtxReader__>
              }
              method={"POST"}
              noLayout={false}
              url={"https://rest-dev.evergent.com/ccb/getProductsList"}
            >
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__saUwa
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $ctx.fetchedData.GetProductsListResponseMessage
                            .productsResponseMessage[1].retailPrice;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                )}
              </DataCtxReader__>
            </DataFetcher>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "bbsportsNavbar",
    "img",
    "link",
    "acceptoffer",
    "input",
    "bBsportsFooter2",
    "bBsportsFooter"
  ],

  bbsportsNavbar: ["bbsportsNavbar"],
  img: ["img"],
  link: ["link", "acceptoffer"],
  acceptoffer: ["acceptoffer"],
  input: ["input"],
  bBsportsFooter2: ["bBsportsFooter2"],
  bBsportsFooter: ["bBsportsFooter"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBBsports1__ArgProps,
          internalVariantPropNames: PlasmicBBsports1__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBBsports1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBBsports1";
  } else {
    func.displayName = `PlasmicBBsports1.${nodeName}`;
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

export const PlasmicBBsports1 = Object.assign(
  // Top-level PlasmicBBsports1 renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    bbsportsNavbar: makeNodeComponent("bbsportsNavbar"),
    img: makeNodeComponent("img"),
    link: makeNodeComponent("link"),
    acceptoffer: makeNodeComponent("acceptoffer"),
    input: makeNodeComponent("input"),
    bBsportsFooter2: makeNodeComponent("bBsportsFooter2"),
    bBsportsFooter: makeNodeComponent("bBsportsFooter"),
    // Metadata about props expected for PlasmicBBsports1
    internalVariantProps: PlasmicBBsports1__VariantProps,
    internalArgProps: PlasmicBBsports1__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBBsports1;
/* prettier-ignore-end */
