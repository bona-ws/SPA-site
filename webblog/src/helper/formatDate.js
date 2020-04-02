// import React from "react";

export function blogFormatDate(date) {
  return Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric"
  }).format(new Date(date));
}
