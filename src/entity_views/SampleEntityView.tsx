import React from "react";
import {
  buildCollection,
  Button,
  Entity,
  EntityValues,
  useAuthController,
  useDataSource,
  useReferenceDialog,
  useSideEntityController,
  useSnackbarController,
} from "@firecms/cloud";
import { Product } from "../types";
import CustomColorTextField from "src/form_fields/CustomColorTextField";

export function SampleEntityView({
  entity,
  modifiedValues,
}: {
  entity?: Entity<Product>;
  modifiedValues?: EntityValues<Product>;
}) {
  const authController = useAuthController();
  const snackbarController = useSnackbarController(); // toast
  // hook to open a reference dialog
  const referenceDialog = useReferenceDialog({
    path: "products",
    onSingleEntitySelected(entity: Entity<Product> | null) {
      snackbarController.open({
        type: "success",
        message: "Selected " + entity?.values.name,
      });
    },
  });

  const onClick = (event: React.MouseEvent) => {
    snackbarController.open({
      type: "success",
      message: `Custom action for ${modifiedValues?.name}`,
    });
  };

  const sideEntityController = useSideEntityController();

  // You don't need to provide a schema if the collection path is mapped in
  // the main navigation
  const customproductCollection = buildCollection({
    name: "Produdct",
    properties: {
      name: {
        name: "Name",
        validation: { required: true },
        dataType: "string",
      },
    },
  });

  /*
  fetchCollection: Fetch data from a collection
listenCollection: Listen to a entities in a given path.
fetchEntity: Retrieve an entity given a path and a schema
listenEntity: Get realtime updates on one entity.
saveEntity: Save entity to the specified path
deleteEntity: Delete an entity
checkUniqueField: Check if the given property is unique in the given collection
  */
  const {
    fetchCollection,
    listenCollection,
    fetchEntity,
    listenEntity,
    saveEntity,
    deleteEntity,
    checkUniqueField,
  } = useDataSource();

  const values = modifiedValues ?? {};

  return (
    <div className="flex w-full h-full">
      <div className="m-auto flex flex-col items-center justify-items-center">
        <div className="p-8 md:p-16 flex flex-col gap-4">
          <p>
            This is an example of a custom view added as a panel to an entity
            collection.
          </p>
          <p>Values in the form:</p>

          {values && (
            <p
              className={"font-mono"}
              style={{
                color: "#fff",
                padding: "16px",
                fontSize: ".85em",
                borderRadius: "4px",
                backgroundColor: "#4e482f",
              }}
            >
              {JSON.stringify(values, null, 2)}
            </p>
          )}
        </div>
        <Button onClick={onClick} color="primary">
          Your action
        </Button>
        <Button onClick={referenceDialog.open} color="primary">
          Test reference dialog
        </Button>
        {/* <CustomColorTextField /> */}

        {authController.user ? (
          <div>Logged in as {authController.user.email}</div>
        ) : (
          <div>You are not logged in</div>
        )}

        <Button
          onClick={() =>
            sideEntityController.open({
              entityId: "B003WT1622",
              path: "/prodducts",
              collection: customproductCollection,
            })
          }
          color="primary"
        >
          Open entity with custom schema
        </Button>
      </div>
    </div>
  );
}
