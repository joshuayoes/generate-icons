# Generate Icons

A [Deno-based](https://deno.land/) CLI tool for scaffolding icon components for OE3.

#### Why this is built in Deno

I chose Deno for this project because of ease of distribution. I did not want publish this as an NPM package so being able to run this CLI from a URL maximizes compatibility.

## Installation

You must install Deno on your local machine before using this CLI. Instructions are on [the Deno website](https://deno.land) or [their install page](https://github.com/denoland/deno_install).

## How To Run

Once Deno is installed, run the following command in the root of the offer-engine-3 repository. **Make sure to replace [Icon] with the name of the icon you are generating.**

```
deno run --allow-write --allow-read --unstable https://raw.githubusercontent.com/joshuayoes/generate-icons/master/app.ts [Icon]
```

It will generate the following components at `~/component-library/src/components/icons`

```
.
├── __tests__
│    └── [Icon].test.tsx
├── [Icon].tsx
└── _.stories.tsx
```
