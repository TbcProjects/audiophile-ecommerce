import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://graphql.datocms.com": {
        headers: {
          Authorization: `Bearer 57e9b3d9ca616cc6f5806ba6971a36`,
        },
      },
    },
  ],
  documents: "src/graphql/queries/dato.ts",
  generates: {
    "src/types/Dato/datoTypes.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        {
          "typescript-graphql-request": {
            dedupeFragments: true,
          },
        },
      ],
      config: {
        allowEnumStringTypes: true,
        defaultScalarType: "unknown",
        typesPrefix: "I",
        scalars: {
          BooleanType: "boolean",
          CustomData: "Record<string, string>",
          Date: "string",
          DateTime: "string",
          FloatType: "number",
          IntType: "number",
          ItemId: "string",
          JsonField: "unknown",
          MetaTagAttributes: "Record<string, string>",
          UploadId: "string",
        },
        namingConvention: {
          enumValues: "change-case-all#upperCaseFirst",
        },
      },
    },
  },
};

export default config;
