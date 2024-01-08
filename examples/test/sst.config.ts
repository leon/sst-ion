/// <reference path="./.sst/src/global.d.ts" />

export default $config({
  app(input) {
    return {
      name: "test",
      removalPolicy: "remove",
      providers: {
        aws: {
          profile: "sst-dev",
        },
      },
    };
  },
  async run() {
    const ws = new cloudflare.WorkerScript("WorkerScript", {
      module: true,
      name: "my_worker",
      content: `
        export default {
          async fetch(request) {
            return new Response("Hello, world!");
          }
        }
      `,
      accountId: "15d29c8639fd3733b1b5486a2acfd968",
    });

    /*
    new cloudflare.WorkerRoute("WorkerRoute", {
      scriptName: ws.name,
      pattern: "*",
    })
    */
  },
});
