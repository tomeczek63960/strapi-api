module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '03f9e57d3768e5597414195be1a4db6c'),
    },
  },
});
