import React from "react"

// require 一个文件目录
// __WebpackModuleApi.RequireContext 安装 @types/webpack-env
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('icons', true, /\.svg$/));
} catch (error) {
  throw new Error(error);
}

type Props = {
  name: string
}

const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + props.name} />
    </svg>
  )
}

export default Icon
