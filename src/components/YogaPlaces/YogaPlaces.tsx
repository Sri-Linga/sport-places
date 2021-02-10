import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchYogaPlaces } from "../../actions/YogaPlacesAction";
import { ISportPlacesReducer } from "../../reducers";
import styles from "./YogaPlaces.module.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import { IFeatures } from "../../reducers/YogaPlaces";

const YogaPlaces: React.FC<any> = ({}: any): React.ReactElement => {
  const dispatch = useDispatch();
  const yogaPlaces = useSelector(
    (state: ISportPlacesReducer) => state.YogaPlaces
  );
  console.log("yogaPlaces", yogaPlaces);

  React.useEffect(() => {
    dispatch(fetchYogaPlaces());
  }, []);

  return (
    <section className={styles["yogaPlacesContainer__section"]}>
      <div className={styles["yogaPlacesContainer__header"]}>Yoga Places </div>
      <TableContainer>
        <Table className={styles["yogaPlacesContainer__table"]}>
          <TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell align="center">City</TableCell>
              <TableCell align="center">Province</TableCell>
              <TableCell align="right">Created at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {yogaPlaces &&
              yogaPlaces.YogaPlaces.length > 0 &&
              yogaPlaces.YogaPlaces.map((sportPlace: IFeatures) => {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {sportPlace.properties.address_components.address
                        ? sportPlace.properties.address_components.address
                        : "N/A"}
                    </TableCell>
                    <TableCell align="center">
                      {sportPlace.properties.address_components.city
                        ? sportPlace.properties.address_components.city
                        : "N/A"}
                    </TableCell>
                    <TableCell align="center">
                      {sportPlace.properties.address_components.province
                        ? sportPlace.properties.address_components.province
                        : "N/A"}
                    </TableCell>
                    <TableCell align="right">
                      {sportPlace.properties.created_at}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default YogaPlaces;
