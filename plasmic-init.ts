import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "tTuhwpXqGbSDHYH9yWWwoP";
export const projectApiToken = "xa24meV1liAT1EwbW3a3eGj5RFe9MyhJaZhrZC2dTlsC8gS2bnKzuNyUS5AGfg3SKCD80cczpfqW3QHErxQ";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
