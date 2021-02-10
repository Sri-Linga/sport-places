import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIceHockeyPlaces } from "../../actions/IceHockeyPlacesAction";
import { ISportPlacesReducer } from "../../reducers";
import styles from "./IceHockeyPlaces.module.scss";
import { IFeatures } from "../../reducers/HockeyPlaces";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";

const HockeyPlaces: React.FC<any> = ({}: any): React.ReactElement => {
  const dispatch = useDispatch();

  const hockeyPlaces = useSelector(
    (state: ISportPlacesReducer) => state.HockeyPlaces
  );
  console.log("hockeyPlaces", hockeyPlaces);

  React.useEffect(() => {
    dispatch(fetchIceHockeyPlaces());
  }, []);

  return (
    <section className={styles["hockeyPlacesContainer__section"]}>
      <div className={styles["hockeyPlacesContainer__header"]}>
        Hockey Places
      </div>
      <TableContainer>
        <Table className={styles["hockeyPlacesContainer__table"]}>
          <TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell align="center">City</TableCell>
              <TableCell align="center">Province</TableCell>
              <TableCell align="right">Created at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hockeyPlaces &&
              hockeyPlaces.HockeyPlaces.length > 0 &&
              hockeyPlaces.HockeyPlaces.map((sportPlace: IFeatures) => {
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

export default HockeyPlaces;
