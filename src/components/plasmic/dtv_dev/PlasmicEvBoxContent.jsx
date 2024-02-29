// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMuK5QvKwWGrkw9DYJKXqS
// Component: jft_q_QOdIxS
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sMuK5QvKwWGrkw9DYJKXqS/projectcss
import sty from "./PlasmicEvBoxContent.module.css"; // plasmic-import: jft_q_QOdIxS/css

createPlasmicElementProxy;

export const PlasmicEvBoxContent__VariantProps = new Array();

export const PlasmicEvBoxContent__ArgProps = new Array();

const $$ = {};

function PlasmicEvBoxContent__RenderFunc(props) {
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
          <div className={classNames(projectcss.all, sty.freeBox__lBaH6)}>
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              <React.Fragment>
                <React.Fragment>{"ev"}</React.Fragment>
                {
                  <span
                    data-plasmic-name={"span"}
                    data-plasmic-override={overrides.span}
                    className={classNames(
                      projectcss.all,
                      projectcss.span,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.span
                    )}
                  >
                    {"box"}
                  </span>
                }

                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__cDsJp)}>
            <h2
              data-plasmic-name={"h2"}
              data-plasmic-override={overrides.h2}
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2
              )}
            >
              {"Page Title"}
            </h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "text", "span", "h2"],
  text: ["text", "span"],
  span: ["span"],
  h2: ["h2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicEvBoxContent__ArgProps,
          internalVariantPropNames: PlasmicEvBoxContent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEvBoxContent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEvBoxContent";
  } else {
    func.displayName = `PlasmicEvBoxContent.${nodeName}`;
  }
  return func;
}

export const PlasmicEvBoxContent = Object.assign(
  // Top-level PlasmicEvBoxContent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    span: makeNodeComponent("span"),
    h2: makeNodeComponent("h2"),
    // Metadata about props expected for PlasmicEvBoxContent
    internalVariantProps: PlasmicEvBoxContent__VariantProps,
    internalArgProps: PlasmicEvBoxContent__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicEvBoxContent;
/* prettier-ignore-end */
