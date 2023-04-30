/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MyQuery
// ====================================================

export interface MyQuery_pageHome_homepageSections_SectionContentWithImageRecord {
  __typename:
    | "SectionContentWithImageRecord"
    | "SectionHeroRecord"
    | "SectionHomepageProductGridRecord";
}

export interface MyQuery_pageHome_homepageSections_SectionCategorySelectionRecord {
  __typename: "SectionCategorySelectionRecord";
  id: any;
}

export type MyQuery_pageHome_homepageSections =
  | MyQuery_pageHome_homepageSections_SectionContentWithImageRecord
  | MyQuery_pageHome_homepageSections_SectionCategorySelectionRecord;

export interface MyQuery_pageHome {
  __typename: "PageHomeRecord";
  homepageSections: MyQuery_pageHome_homepageSections[];
}

export interface MyQuery {
  /**
   * Returns the single instance record
   */
  pageHome: MyQuery_pageHome | null;
}
