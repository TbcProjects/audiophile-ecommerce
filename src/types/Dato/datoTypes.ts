import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BooleanType: boolean;
  CustomData: Record<string, string>;
  DateTime: string;
  FloatType: number;
  IntType: number;
  ItemId: string;
  MetaTagAttributes: Record<string, string>;
  UploadId: string;
};

/** Specifies how to filter Boolean fields */
export type IBooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars["BooleanType"]>;
};

export type ICollectionMetadata = {
  __typename?: "CollectionMetadata";
  count: Scalars["IntType"];
};

export enum IColorBucketType {
  Black = "black",
  Blue = "blue",
  Brown = "brown",
  Cyan = "cyan",
  Green = "green",
  Grey = "grey",
  Orange = "orange",
  Pink = "pink",
  Purple = "purple",
  Red = "red",
  White = "white",
  Yellow = "yellow",
}

export type IColorField = {
  __typename?: "ColorField";
  alpha: Scalars["IntType"];
  blue: Scalars["IntType"];
  cssRgb: Scalars["String"];
  green: Scalars["IntType"];
  hex: Scalars["String"];
  red: Scalars["IntType"];
};

/** Specifies how to filter by creation datetime */
export type ICreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars["DateTime"]>;
};

export enum IFaviconType {
  AppleTouchIcon = "appleTouchIcon",
  Icon = "icon",
  MsApplication = "msApplication",
}

export type IFileField = IFileFieldInterface & {
  __typename?: "FileField";
  _createdAt: Scalars["DateTime"];
  _updatedAt: Scalars["DateTime"];
  alt?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  basename: Scalars["String"];
  blurUpThumb?: Maybe<Scalars["String"]>;
  blurhash?: Maybe<Scalars["String"]>;
  colors: Array<IColorField>;
  copyright?: Maybe<Scalars["String"]>;
  customData: Scalars["CustomData"];
  exifInfo: Scalars["CustomData"];
  filename: Scalars["String"];
  focalPoint?: Maybe<IFocalPoint>;
  format: Scalars["String"];
  height?: Maybe<Scalars["IntType"]>;
  id: Scalars["UploadId"];
  md5: Scalars["String"];
  mimeType: Scalars["String"];
  notes?: Maybe<Scalars["String"]>;
  responsiveImage?: Maybe<IResponsiveImage>;
  size: Scalars["IntType"];
  smartTags: Array<Scalars["String"]>;
  tags: Array<Scalars["String"]>;
  thumbhash?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
  video?: Maybe<IUploadVideoField>;
  width?: Maybe<Scalars["IntType"]>;
};

export type IFileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<IImgixParams>;
  punch?: Scalars["Float"];
  quality?: Scalars["Int"];
  size?: Scalars["Int"];
};

export type IFileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  imgixParams?: InputMaybe<IImgixParams>;
  locale?: InputMaybe<ISiteLocale>;
  sizes?: InputMaybe<Scalars["String"]>;
};

export type IFileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldUrlArgs = {
  imgixParams?: InputMaybe<IImgixParams>;
};

export type IFileFieldInterface = {
  _createdAt: Scalars["DateTime"];
  _updatedAt: Scalars["DateTime"];
  alt?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  basename: Scalars["String"];
  blurUpThumb?: Maybe<Scalars["String"]>;
  blurhash?: Maybe<Scalars["String"]>;
  colors: Array<IColorField>;
  copyright?: Maybe<Scalars["String"]>;
  customData: Scalars["CustomData"];
  exifInfo: Scalars["CustomData"];
  filename: Scalars["String"];
  focalPoint?: Maybe<IFocalPoint>;
  format: Scalars["String"];
  height?: Maybe<Scalars["IntType"]>;
  id: Scalars["UploadId"];
  md5: Scalars["String"];
  mimeType: Scalars["String"];
  notes?: Maybe<Scalars["String"]>;
  responsiveImage?: Maybe<IResponsiveImage>;
  size: Scalars["IntType"];
  smartTags: Array<Scalars["String"]>;
  tags: Array<Scalars["String"]>;
  thumbhash?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
  video?: Maybe<IUploadVideoField>;
  width?: Maybe<Scalars["IntType"]>;
};

export type IFileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<IImgixParams>;
  punch?: Scalars["Float"];
  quality?: Scalars["Int"];
  size?: Scalars["Int"];
};

export type IFileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  imgixParams?: InputMaybe<IImgixParams>;
  locale?: InputMaybe<ISiteLocale>;
  sizes?: InputMaybe<Scalars["String"]>;
};

export type IFileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<IImgixParams>;
};

export type IGlobalSeoField = {
  __typename?: "GlobalSeoField";
  facebookPageUrl?: Maybe<Scalars["String"]>;
  fallbackSeo?: Maybe<ISeoField>;
  siteName?: Maybe<Scalars["String"]>;
  titleSuffix?: Maybe<Scalars["String"]>;
  twitterAccount?: Maybe<Scalars["String"]>;
};

export type IImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars["String"]>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<IImgixParamsAuto | `${IImgixParamsAuto}`>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars["String"]>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars["BooleanType"]>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars["String"]>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<
    Array<IImgixParamsBlendAlign | `${IImgixParamsBlendAlign}`>
  >;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars["IntType"]>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars["String"]>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<
    Array<IImgixParamsBlendCrop | `${IImgixParamsBlendCrop}`>
  >;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<IImgixParamsBlendFit | `${IImgixParamsBlendFit}`>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<IImgixParamsBlendMode | `${IImgixParamsBlendMode}`>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars["IntType"]>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<IImgixParamsBlendSize | `${IImgixParamsBlendSize}`>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars["IntType"]>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars["IntType"]>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars["IntType"]>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars["String"]>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars["IntType"]>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars["IntType"]>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars["String"]>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars["String"]>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars["IntType"]>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars["IntType"]>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars["IntType"]>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<IImgixParamsCh | `${IImgixParamsCh}`>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars["IntType"]>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars["IntType"]>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars["IntType"]>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars["IntType"]>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars["String"]>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<IImgixParamsCrop | `${IImgixParamsCrop}`>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<IImgixParamsCs | `${IImgixParamsCs}`>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars["String"]>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars["IntType"]>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars["String"]>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars["IntType"]>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars["IntType"]>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars["IntType"]>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars["IntType"]>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars["IntType"]>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<IImgixParamsFill | `${IImgixParamsFill}`>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars["String"]>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<IImgixParamsFit | `${IImgixParamsFit}`>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<IImgixParamsFlip | `${IImgixParamsFlip}`>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<IImgixParamsFm | `${IImgixParamsFm}`>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars["BooleanType"]>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars["IntType"]>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars["String"]>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars["IntType"]>;
  /**
   * Animated Gif Quality
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars["IntType"]>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars["String"]>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars["IntType"]>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars["IntType"]>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars["IntType"]>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars["IntType"]>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars["IntType"]>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars["BooleanType"]>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<IImgixParamsIptc | `${IImgixParamsIptc}`>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars["IntType"]>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars["BooleanType"]>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars["String"]>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<
    Array<IImgixParamsMarkAlign | `${IImgixParamsMarkAlign}`>
  >;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars["IntType"]>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars["String"]>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<IImgixParamsMarkFit | `${IImgixParamsMarkFit}`>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars["IntType"]>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars["IntType"]>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<IImgixParamsMarkTile | `${IImgixParamsMarkTile}`>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars["IntType"]>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars["IntType"]>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars["String"]>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars["String"]>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars["IntType"]>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars["IntType"]>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars["IntType"]>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars["IntType"]>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars["String"]>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars["IntType"]>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars["IntType"]>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars["IntType"]>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars["IntType"]>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars["IntType"]>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars["IntType"]>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars["IntType"]>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars["IntType"]>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars["IntType"]>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<IImgixParamsPalette | `${IImgixParamsPalette}`>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars["BooleanType"]>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars["String"]>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars["IntType"]>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars["IntType"]>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars["String"]>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars["BooleanType"]>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars["IntType"]>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars["IntType"]>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars["IntType"]>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<
    IImgixParamsTransparency | `${IImgixParamsTransparency}`
  >;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<IImgixParamsTrim | `${IImgixParamsTrim}`>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars["String"]>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars["IntType"]>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars["String"]>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<
    Array<IImgixParamsTxtAlign | `${IImgixParamsTxtAlign}`>
  >;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<IImgixParamsTxtClip | `${IImgixParamsTxtClip}`>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars["String"]>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<IImgixParamsTxtFit | `${IImgixParamsTxtFit}`>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars["String"]>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars["IntType"]>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars["IntType"]>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars["IntType"]>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars["String"]>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars["IntType"]>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars["IntType"]>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars["IntType"]>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars["IntType"]>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars["IntType"]>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars["IntType"]>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars["IntType"]>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars["FloatType"]>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars["IntType"]>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars["FloatType"]>;
};

export enum IImgixParamsAuto {
  Compress = "compress",
  Enhance = "enhance",
  Format = "format",
  Redeye = "redeye",
}

export enum IImgixParamsBlendAlign {
  Bottom = "bottom",
  Center = "center",
  Left = "left",
  Middle = "middle",
  Right = "right",
  Top = "top",
}

export enum IImgixParamsBlendCrop {
  Bottom = "bottom",
  Faces = "faces",
  Left = "left",
  Right = "right",
  Top = "top",
}

export enum IImgixParamsBlendFit {
  Clamp = "clamp",
  Clip = "clip",
  Crop = "crop",
  Max = "max",
  Scale = "scale",
}

export enum IImgixParamsBlendMode {
  Burn = "burn",
  Color = "color",
  Darken = "darken",
  Difference = "difference",
  Dodge = "dodge",
  Exclusion = "exclusion",
  Hardlight = "hardlight",
  Hue = "hue",
  Lighten = "lighten",
  Luminosity = "luminosity",
  Multiply = "multiply",
  Normal = "normal",
  Overlay = "overlay",
  Saturation = "saturation",
  Screen = "screen",
  Softlight = "softlight",
}

export enum IImgixParamsBlendSize {
  Inherit = "inherit",
}

export enum IImgixParamsCh {
  Dpr = "dpr",
  SaveData = "saveData",
  Width = "width",
}

export enum IImgixParamsCrop {
  Bottom = "bottom",
  Edges = "edges",
  Entropy = "entropy",
  Faces = "faces",
  Focalpoint = "focalpoint",
  Left = "left",
  Right = "right",
  Top = "top",
}

export enum IImgixParamsCs {
  Adobergb1998 = "adobergb1998",
  Srgb = "srgb",
  Strip = "strip",
  Tinysrgb = "tinysrgb",
}

export enum IImgixParamsFill {
  Blur = "blur",
  Solid = "solid",
}

export enum IImgixParamsFit {
  Clamp = "clamp",
  Clip = "clip",
  Crop = "crop",
  Facearea = "facearea",
  Fill = "fill",
  Fillmax = "fillmax",
  Max = "max",
  Min = "min",
  Scale = "scale",
}

export enum IImgixParamsFlip {
  H = "h",
  Hv = "hv",
  V = "v",
}

export enum IImgixParamsFm {
  Avif = "avif",
  Blurhash = "blurhash",
  Gif = "gif",
  Jp2 = "jp2",
  Jpg = "jpg",
  Json = "json",
  Jxr = "jxr",
  Mp4 = "mp4",
  Pjpg = "pjpg",
  Png = "png",
  Png8 = "png8",
  Png32 = "png32",
  Webm = "webm",
  Webp = "webp",
}

export enum IImgixParamsIptc {
  Allow = "allow",
  Block = "block",
}

export enum IImgixParamsMarkAlign {
  Bottom = "bottom",
  Center = "center",
  Left = "left",
  Middle = "middle",
  Right = "right",
  Top = "top",
}

export enum IImgixParamsMarkFit {
  Clip = "clip",
  Crop = "crop",
  Fill = "fill",
  Max = "max",
  Scale = "scale",
}

export enum IImgixParamsMarkTile {
  Grid = "grid",
}

export enum IImgixParamsPalette {
  Css = "css",
  Json = "json",
}

export enum IImgixParamsTransparency {
  Grid = "grid",
}

export enum IImgixParamsTrim {
  Auto = "auto",
  Color = "color",
}

export enum IImgixParamsTxtAlign {
  Bottom = "bottom",
  Center = "center",
  Left = "left",
  Middle = "middle",
  Right = "right",
  Top = "top",
}

export enum IImgixParamsTxtClip {
  Ellipsis = "ellipsis",
  End = "end",
  Middle = "middle",
  Start = "start",
}

export enum IImgixParamsTxtFit {
  Max = "max",
}

/** Specifies how to filter by usage */
export type IInUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars["BooleanType"]>;
};

/** Specifies how to filter by ID */
export type IItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars["ItemId"]>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars["ItemId"]>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]>>>;
};

export enum IItemStatus {
  Draft = "draft",
  Published = "published",
  Updated = "updated",
}

export enum IMuxThumbnailFormatType {
  Gif = "gif",
  Jpg = "jpg",
  Png = "png",
}

/** Specifies how to filter by image orientation */
export type IOrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<IUploadOrientation | `${IUploadOrientation}`>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<IUploadOrientation | `${IUploadOrientation}`>;
};

export type IPageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<IPageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IPageModelFilter>>>;
  _createdAt?: InputMaybe<ICreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<IPublishedAtFilter>;
  _isValid?: InputMaybe<IBooleanFilter>;
  _publicationScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _publishedAt?: InputMaybe<IPublishedAtFilter>;
  _status?: InputMaybe<IStatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<IPublishedAtFilter>;
  _updatedAt?: InputMaybe<IUpdatedAtFilter>;
  id?: InputMaybe<IItemIdFilter>;
};

export enum IPageModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
}

/** Record of type Page  (page) */
export type IPageRecord = IRecordInterface & {
  __typename?: "PageRecord";
  _createdAt: Scalars["DateTime"];
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>;
  _isValid: Scalars["BooleanType"];
  _modelApiKey: Scalars["String"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]>;
  _updatedAt: Scalars["DateTime"];
  heading: Array<IPageTestRecord>;
  id: Scalars["ItemId"];
};

/** Record of type Page  (page) */
export type IPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

/** Block of type Heading (page_test) */
export type IPageTestRecord = IRecordInterface & {
  __typename?: "PageTestRecord";
  _createdAt: Scalars["DateTime"];
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>;
  _isValid: Scalars["BooleanType"];
  _modelApiKey: Scalars["String"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]>;
  _updatedAt: Scalars["DateTime"];
  heading?: Maybe<Scalars["String"]>;
  id: Scalars["ItemId"];
};

/** Block of type Heading (page_test) */
export type IPageTestRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

/** Specifies how to filter by publication datetime */
export type IPublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars["DateTime"]>;
};

/** The query root for this schema */
export type IQuery = {
  __typename?: "Query";
  /** Returns meta information regarding a record collection */
  _allPagesMeta: ICollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta?: Maybe<ICollectionMetadata>;
  /** Returns the single instance record */
  _site: ISite;
  /** Returns a collection of records */
  allPages: Array<IPageRecord>;
  /** Returns a collection of assets */
  allUploads: Array<IFileField>;
  /** Returns a specific record */
  page?: Maybe<IPageRecord>;
  /** Returns a specific asset */
  upload?: Maybe<IFileField>;
};

/** The query root for this schema */
export type IQuery_AllPagesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IPageModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
};

/** The query root for this schema */
export type IQuery_AllUploadsMetaArgs = {
  filter?: InputMaybe<IUploadFilter>;
  locale?: InputMaybe<ISiteLocale>;
};

/** The query root for this schema */
export type IQuery_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

/** The query root for this schema */
export type IQueryAllPagesArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IPageModelFilter>;
  first?: InputMaybe<Scalars["IntType"]>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IPageModelOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]>;
};

/** The query root for this schema */
export type IQueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IUploadFilter>;
  first?: InputMaybe<Scalars["IntType"]>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IUploadOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]>;
};

/** The query root for this schema */
export type IQueryPageArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IPageModelFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IPageModelOrderBy>>>;
};

/** The query root for this schema */
export type IQueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IUploadFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IUploadOrderBy>>>;
};

export type IRecordInterface = {
  _createdAt: Scalars["DateTime"];
  _firstPublishedAt?: Maybe<Scalars["DateTime"]>;
  _isValid: Scalars["BooleanType"];
  _modelApiKey: Scalars["String"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]>;
  _updatedAt: Scalars["DateTime"];
  id: Scalars["ItemId"];
};

export type IRecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

/** Specifies how to filter by upload type */
export type IResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<IResolutionType | `${IResolutionType}`>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<IResolutionType | `${IResolutionType}`>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<IResolutionType | `${IResolutionType}`>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<IResolutionType | `${IResolutionType}`>>>;
};

export enum IResolutionType {
  Icon = "icon",
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export type IResponsiveImage = {
  __typename?: "ResponsiveImage";
  alt?: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["FloatType"];
  base64?: Maybe<Scalars["String"]>;
  bgColor?: Maybe<Scalars["String"]>;
  height: Scalars["IntType"];
  sizes: Scalars["String"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
  webpSrcSet: Scalars["String"];
  width: Scalars["IntType"];
};

export type ISeoField = {
  __typename?: "SeoField";
  description?: Maybe<Scalars["String"]>;
  image?: Maybe<IFileField>;
  title?: Maybe<Scalars["String"]>;
  twitterCard?: Maybe<Scalars["String"]>;
};

export type ISite = {
  __typename?: "Site";
  favicon?: Maybe<IFileField>;
  faviconMetaTags: Array<ITag>;
  globalSeo?: Maybe<IGlobalSeoField>;
  locales: Array<ISiteLocale | `${ISiteLocale}`>;
};

export type ISiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<IFaviconType>>>;
};

export type ISiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export enum ISiteLocale {
  En = "en",
}

/** Specifies how to filter by status */
export type IStatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<IItemStatus | `${IItemStatus}`>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<IItemStatus | `${IItemStatus}`>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<IItemStatus | `${IItemStatus}`>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<IItemStatus | `${IItemStatus}`>>>;
};

export type IStringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars["BooleanType"]>;
  pattern: Scalars["String"];
  regexp?: InputMaybe<Scalars["BooleanType"]>;
};

export type ITag = {
  __typename?: "Tag";
  attributes?: Maybe<Scalars["MetaTagAttributes"]>;
  content?: Maybe<Scalars["String"]>;
  tag: Scalars["String"];
};

/** Specifies how to filter by upload type */
export type ITypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<IUploadType | `${IUploadType}`>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<IUploadType | `${IUploadType}`>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<IUploadType | `${IUploadType}`>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<IUploadType | `${IUploadType}`>>>;
};

/** Specifies how to filter by update datetime */
export type IUpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars["DateTime"]>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars["DateTime"]>;
};

/** Specifies how to filter by default alt */
export type IUploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars["String"]>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars["String"]>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type IUploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type IUploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type IUploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<
    Array<InputMaybe<IColorBucketType | `${IColorBucketType}`>>
  >;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<
    Array<InputMaybe<IColorBucketType | `${IColorBucketType}`>>
  >;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<IColorBucketType | `${IColorBucketType}`>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<IColorBucketType | `${IColorBucketType}`>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<
    Array<InputMaybe<IColorBucketType | `${IColorBucketType}`>>
  >;
};

/** Specifies how to filter by copyright */
export type IUploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type IUploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars["DateTime"]>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars["DateTime"]>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars["DateTime"]>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars["DateTime"]>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars["DateTime"]>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars["DateTime"]>;
};

/** Specifies how to filter by filename */
export type IUploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

export type IUploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<IUploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IUploadFilter>>>;
  _createdAt?: InputMaybe<IUploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<IUploadUpdatedAtFilter>;
  alt?: InputMaybe<IUploadAltFilter>;
  author?: InputMaybe<IUploadAuthorFilter>;
  basename?: InputMaybe<IUploadBasenameFilter>;
  colors?: InputMaybe<IUploadColorsFilter>;
  copyright?: InputMaybe<IUploadCopyrightFilter>;
  filename?: InputMaybe<IUploadFilenameFilter>;
  format?: InputMaybe<IUploadFormatFilter>;
  height?: InputMaybe<IUploadHeightFilter>;
  id?: InputMaybe<IUploadIdFilter>;
  inUse?: InputMaybe<IInUseFilter>;
  md5?: InputMaybe<IUploadMd5Filter>;
  mimeType?: InputMaybe<IUploadMimeTypeFilter>;
  notes?: InputMaybe<IUploadNotesFilter>;
  orientation?: InputMaybe<IOrientationFilter>;
  resolution?: InputMaybe<IResolutionFilter>;
  size?: InputMaybe<IUploadSizeFilter>;
  smartTags?: InputMaybe<IUploadTagsFilter>;
  tags?: InputMaybe<IUploadTagsFilter>;
  title?: InputMaybe<IUploadTitleFilter>;
  type?: InputMaybe<ITypeFilter>;
  width?: InputMaybe<IUploadWidthFilter>;
};

/** Specifies how to filter by format */
export type IUploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars["String"]>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars["String"]>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Specifies how to filter by height */
export type IUploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars["IntType"]>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars["IntType"]>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars["IntType"]>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars["IntType"]>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars["IntType"]>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars["IntType"]>;
};

/** Specifies how to filter by ID */
export type IUploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars["UploadId"]>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars["UploadId"]>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]>>>;
};

/** Specifies how to filter by MD5 */
export type IUploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars["String"]>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars["String"]>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Specifies how to filter by mime type */
export type IUploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars["String"]>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars["String"]>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type IUploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

export enum IUploadOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  Basename_ASC = "basename_ASC",
  Basename_DESC = "basename_DESC",
  Filename_ASC = "filename_ASC",
  Filename_DESC = "filename_DESC",
  Format_ASC = "format_ASC",
  Format_DESC = "format_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  MimeType_ASC = "mimeType_ASC",
  MimeType_DESC = "mimeType_DESC",
  Resolution_ASC = "resolution_ASC",
  Resolution_DESC = "resolution_DESC",
  Size_ASC = "size_ASC",
  Size_DESC = "size_DESC",
}

export enum IUploadOrientation {
  Landscape = "landscape",
  Portrait = "portrait",
  Square = "square",
}

/** Specifies how to filter by size */
export type IUploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars["IntType"]>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars["IntType"]>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars["IntType"]>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars["IntType"]>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars["IntType"]>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars["IntType"]>;
};

/** Specifies how to filter by tags */
export type IUploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars["String"]>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars["String"]>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars["String"]>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars["String"]>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars["String"]>>;
};

/** Specifies how to filter by default title */
export type IUploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars["String"]>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars["String"]>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

export enum IUploadType {
  Archive = "archive",
  Audio = "audio",
  Image = "image",
  Pdfdocument = "pdfdocument",
  Presentation = "presentation",
  Richtext = "richtext",
  Spreadsheet = "spreadsheet",
  Video = "video",
}

/** Specifies how to filter by update datetime */
export type IUploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars["DateTime"]>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars["DateTime"]>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars["DateTime"]>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars["DateTime"]>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars["DateTime"]>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars["DateTime"]>;
};

export type IUploadVideoField = {
  __typename?: "UploadVideoField";
  duration?: Maybe<Scalars["Int"]>;
  framerate?: Maybe<Scalars["Int"]>;
  mp4Url?: Maybe<Scalars["String"]>;
  muxAssetId: Scalars["String"];
  muxPlaybackId: Scalars["String"];
  streamingUrl: Scalars["String"];
  thumbnailUrl: Scalars["String"];
};

export type IUploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<IVideoMp4Res>;
  res?: InputMaybe<IVideoMp4Res>;
};

export type IUploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<IMuxThumbnailFormatType>;
};

/** Specifies how to filter by width */
export type IUploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars["IntType"]>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars["IntType"]>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars["IntType"]>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars["IntType"]>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars["IntType"]>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars["IntType"]>;
};

export enum IVideoMp4Res {
  High = "high",
  Low = "low",
  Medium = "medium",
}

export type IFocalPoint = {
  __typename?: "focalPoint";
  x: Scalars["FloatType"];
  y: Scalars["FloatType"];
};

export type IMyQueryQueryVariables = Exact<{ [key: string]: never }>;

export type IMyQueryQuery = {
  __typename?: "Query";
  allPages: Array<{
    __typename?: "PageRecord";
    heading: Array<{ __typename?: "PageTestRecord"; heading?: string | null }>;
  }>;
};

export const MyQueryDocument = gql`
  query MyQuery {
    allPages {
      heading {
        heading
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    MyQuery(
      variables?: IMyQueryQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<IMyQueryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IMyQueryQuery>(MyQueryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "MyQuery",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
