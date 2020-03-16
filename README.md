### Technologies

- [11ty](https://www.11ty.dev/docs/)
- [NunJucks](https://mozilla.github.io/nunjucks/templating.html) - _For Templating_
- [Tailwind CSS](https://tailwindcss.com/)
- [Gulp](https://gulpjs.com/)
- [PostCSS](https://postcss.org/)
- [Prettier](https://prettier.io/docs/en/options.html) - _Enable your editor to "format on save"._

### Developing

**Start Local Dev Server:**

```

npm run develop

```

**Test Production Stylesheets**
_PurgeCSS is only run in production_

```

NODE_ENV=production gulp build

```

**For Production:**

```

npm run build

```
