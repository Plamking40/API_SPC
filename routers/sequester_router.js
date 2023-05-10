const express = require("express");
const router = express.Router();
const conn = require("../DB/db");

// full id
router.get("/", (req, res) => {
  const { id } = req.params;

  try {
    conn.query(
      `SELECT id,execute_date,execute_date1,execute_date2,execute_province,execute_brance,
        execute_date_wait,execute_wait_day,execute_date_wait_lastdate,execute_day_wait_lastnow,
        execute_note_late,execute_date_cancel,execute_staff_id,execute_num_map,execute_out_area,
        execute_special_cost1,execute_special_cost2,execute_special_cost3,execute_deed_no,execute_area_no,
        execute_area_province,execute_area_district,execute_area_subdistrict,execute_price1,execute_area_details,
        execute_item,execute_mortgaged,execute_details,execute_map_details,execute_lat,execute_lon
        FROM tb_cases `,
      (err, results, fields) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

// one id
router.get("/single/:id", (req, res) => {
  const { id } = req.params;

  try {
    conn.query(
      `SELECT id,execute_date,execute_date1,execute_date2,execute_province,execute_brance,
      execute_date_wait,execute_wait_day,execute_date_wait_lastdate,execute_day_wait_lastnow,
      execute_note_late,execute_date_cancel,execute_staff_id,execute_num_map,execute_out_area,
      execute_special_cost1,execute_special_cost2,execute_special_cost3,execute_deed_no,execute_area_no,
      execute_area_province,execute_area_district,execute_area_subdistrict,execute_price1,execute_area_details,
      execute_item,execute_mortgaged,execute_details,execute_map_details,execute_lat,execute_lon
      FROM tb_cases where id = ?`,
      [id],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

// update id one
router.patch("/update/:id", (req, res) => {
  const { id } = req.params;
  const {
    up_execute_date,
    up_execute_date1,
    up_execute_date2,
    up_execute_province,
    up_execute_brance,
    up_execute_date_wait,
    up_execute_wait_day,
    up_execute_date_wait_lastdate,
    up_execute_day_wait_lastnow,
    up_execute_note_late,
    up_execute_date_cancel,
    up_execute_staff_id,
    up_execute_num_map,
    up_execute_out_area,
    up_execute_special_cost1,
    up_execute_special_cost2,
    up_execute_special_cost3,
    up_execute_deed_no,
    up_execute_area_no,
    up_execute_area_province,
    up_execute_area_district,
    up_execute_area_subdistrict,
    up_execute_price1,
    up_execute_area_details,
    up_execute_item,
    up_execute_mortgaged,
    up_execute_details,
    up_execute_map_details,
    up_execute_lat,
    up_execute_lon,
  } = req.body;

  try {
    conn.query(
      `UPDATE tb_cases SET
      execute_date = ?,
      execute_date1 = ?,
      execute_date2 = ?,
      execute_province = ?,
      execute_brance = ?,
      execute_date_wait = ?,
      execute_wait_day = ?,
      execute_date_wait_lastdate = ?,
      execute_day_wait_lastnow = ?,
      execute_note_late = ?,
      execute_date_cancel = ?,
      execute_staff_id = ?,
      execute_num_map = ?,
      execute_out_area = ?,
      execute_special_cost1 = ?,
      execute_special_cost2 = ?,
      execute_special_cost3 = ?,
      execute_deed_no = ?,
      execute_area_no = ?,
      execute_area_province = ?,
      execute_area_district = ?,
      execute_area_subdistrict = ?,
      execute_price1 = ?,
      execute_area_details = ?,
      execute_item = ?,
      execute_mortgaged = ?,
      execute_details = ?,
      execute_map_details = ?,
      execute_lat = ?,
      execute_lon = ?
      WHERE id = ?`,
      [
        up_execute_date,
        up_execute_date1,
        up_execute_date2,
        up_execute_province,
        up_execute_brance,
        up_execute_date_wait,
        up_execute_wait_day,
        up_execute_date_wait_lastdate,
        up_execute_day_wait_lastnow,
        up_execute_note_late,
        up_execute_date_cancel,
        up_execute_staff_id,
        up_execute_num_map,
        up_execute_out_area,
        up_execute_special_cost1,
        up_execute_special_cost2,
        up_execute_special_cost3,
        up_execute_deed_no,
        up_execute_area_no,
        up_execute_area_province,
        up_execute_area_district,
        up_execute_area_subdistrict,
        up_execute_price1,
        up_execute_area_details,
        up_execute_item,
        up_execute_mortgaged,
        up_execute_details,
        up_execute_map_details,
        up_execute_lat,
        up_execute_lon,
        id,
      ],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          req.status(400).send();
        }
        res.status(200).json({ message: "Cases Update successfully!" });
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

module.exports = router;
