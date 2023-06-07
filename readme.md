[![build](https://github.com/barakb/hello-langchain/actions/workflows/build.yml/badge.svg)](https://github.com/barakb/hello-langchain/actions/workflows/build.yml)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

<img src="https://cncf-branding.netlify.app/img/projects/opentelemetry/horizontal/color/opentelemetry-horizontal-color.svg"  style="width:200px;"/>


#### cleaning
`npm run clean` 

#### building 

`npm run build` or `tsc` or `tsc --watch`

#### running 
`npm run start`

#### buildpacks

##### build image
`pack build hello-langchain  --builder paketobuildpacks/builder:base --buildpack gcr.io/paketo-buildpacks/nodejs  --env BP_NODE_OPTIMIZE_MEMORY=true`

##### run image

`docker run -it  hello-langchain` 


https://www.codemag.com/Article/2209091/Getting-Started-with-Cloud-Native-Buildpacks

https://paketo.io/docs/howto/nodejs/

https://langchainers.hashnode.dev/getting-started-with-langchainjs