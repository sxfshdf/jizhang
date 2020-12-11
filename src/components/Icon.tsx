import React from "react"
import classNames from "classnames"

// require 一个文件目录
// __WebpackModuleApi.RequireContext 安装 @types/webpack-env
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('icons', true, /\.svg$/));
} catch (error) {
  throw new Error(error);
}

type Props = {
  name?: string,
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
  const {name, children, className, ...rest} = props
  return (
    <svg className={classNames('icon', className)} {...rest} >
      {props.name && <use xlinkHref={'#' + props.name} />}
    </svg>
  )
}

export default Icon
