[![build](https://github.com/barakb/hello-langchain/actions/workflows/build.yml/badge.svg)](https://github.com/barakb/hello-langchain/actions/workflows/build.yml)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

<img src="https://cncf-branding.netlify.app/img/projects/opentelemetry/horizontal/color/opentelemetry-horizontal-color.svg"  style="width:200px;"/>

#### building 

`npm run build` or `tsc` or `tsc --watch`
`

#### buildpacks

##### build image
`pack build hello-langchain  --builder paketobuildpacks/builder:base`

##### run image

`docker run -it  hello-langchain` 


https://www.codemag.com/Article/2209091/Getting-Started-with-Cloud-Native-Buildpacks