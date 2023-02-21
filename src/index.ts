import tls from "tls";
tls.connect(
  {
    rejectUnauthorized: true,
  },
  (response) => {}
);
