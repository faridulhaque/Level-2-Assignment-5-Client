export type TGadgetFilterComp = {
  setItemsForFilter: (data: any) => void;
  setFilterTable: (data: boolean) => void;
  filterTable: boolean;
  itemsForFilter: any;
  handleFilter: () => void;
  handleClearFilter: () => void;
};
