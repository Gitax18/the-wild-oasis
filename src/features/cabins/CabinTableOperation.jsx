import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterName="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort By name (A-Z)" },
          { value: "name-dsc", label: "Sort By name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort By Price (Low first)" },
          { value: "regularPrice-desc", label: "Sort By Price (High first)" },
          { value: "maxCapacity-asc", label: "Sort By Capacity (Low first)" },
          { value: "maxCapacity-desc", label: "Sort By Capacity (High first)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperation;
