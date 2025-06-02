import React from "react";
import "./Chart.css"

import { TooltipProps } from 'recharts';
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>)  => {
    if (active && payload && payload.length) {
      return (
        <div className="extreme-custom-tooltip">
          <div style={{ color: "#DCD8D3", fontSize: "12px", lineHeight: "16px", textAlign: "left" }}>Jan 2024 - Apr 2025</div>
          <div className="desc" style={{ fontSize: "12px", lineHeight: "16px" }}>TIMELESS 54, TIMELESS 3</div>
          <div style={{display: "flex", flexDirection: "column", gap: 8, maxWidth: 290}}>
            {payload.map((pld) => (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", flexDirection: "row", width: 290 }}>
                    <div style={{ color: pld.color, display: "flex", alignItems: "left", gap: 4, width: 290, fontSize: "12px", lineHeight: "16px" }}>
                        <div style={{ background: pld.color, width: 8, height: 8, borderRadius: 2, marginTop: 3, marginBottom: 2 }}></div>
                        <div>{pld.dataKey}</div>
                    </div>
                    <div style={{ color: "#DCD8D3", fontWeight: "bold", fontSize: "12px", lineHeight: "16px", marginRight: 2 }}>{pld.value}</div>
                    <div style={{ color: "#DCD8D3", fontWeight: "bold", fontSize: "12px", lineHeight: "16px" }}>
                    {
                      pld.dataKey === "Revenue Net" || pld.dataKey === "Revenue Net Prev" ? ("₽") : (
                        pld.dataKey === "Avg Check Per Guest" || pld.dataKey === "Avg Check Per Guest Prev" ? ("₽") : (
                          pld.dataKey === "Income Accumulated" || pld.dataKey === "Income Accumulated Prev" ? ("₽") : (
                            pld.dataKey === "Profit Gross Per M²" || pld.dataKey === "Profit Gross Per M² Prev" ? ("₽") : (
                              pld.dataKey === "Revenue Gross" || pld.dataKey === "Revenue Gross Prev" ? ("₽") : (
                                pld.dataKey === "Profit" || pld.dataKey === "Profit Prev" ? ("₽") : (
                                    pld.dataKey === "Expense Per Seat" || pld.dataKey === "Expense Per Seat Prev" ? ("₽") : (
                                        pld.dataKey === "Revenue Net Accumulated" || pld.dataKey === "Revenue Net Accumulated Prev" ? ("₽") : (
                                            pld.dataKey === "Discount Loyalty" || pld.dataKey === "Discount Loyalty Prev" ? ("₽") : (
                                                pld.dataKey === "Avg Check Per Hour" || pld.dataKey === "Avg Check Per Hour Prev" ? ("₽") : (
                                                    pld.dataKey === "Avg Check Per Table" || pld.dataKey === "Avg Check Per Table Prev" ? ("₽") : (
                                                        pld.dataKey === "CSI" || pld.dataKey === "CSI Prev" ? ("pts") : (
                                                            pld.dataKey === "Checks Count" || pld.dataKey === "Checks Count Prev" ? ("") : ("")
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                              )
                            )
                          )
                        )
                      )
                    }
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", width: 290, textAlign: "left", fontSize: "10px", lineHeight: "14px" }}>
                    {
                      pld.dataKey === "Revenue Net" || pld.dataKey === "Revenue Net Prev" ? ("Currency = RUB; Pay Type = Cash; Day Time = Evening, Night") : (
                        pld.dataKey === "Avg Check Per Guest" || pld.dataKey === "Avg Check Per Guest Prev" ? ("Currency = RUB; Loyalty Program = With Loyalty Program; Guest Type = Returning Guest") : (
                          pld.dataKey === "Income Accumulated" || pld.dataKey === "Income Accumulated Prev" ? ("Currency = RUB; Category = Merch, Consulting, Catering; Account Type = Bank Account") : (
                            pld.dataKey === "Profit Gross Per M²" || pld.dataKey === "Profit Gross Per M² Prev" ? ("Currency = RUB; Product Category = Hookahs; Day Time = Morning; Day = Weekdays") : (
                              pld.dataKey === "Revenue Gross" || pld.dataKey === "Revenue Gross Prev" ? ("Currency = RUB; Day Time = Night") : (
                                pld.dataKey === "Profit" || pld.dataKey === "Profit Prev" ? ("Currency = RUB; Day = Friday") : (
                                    pld.dataKey === "Expense Per Seat" || pld.dataKey === "Expense Per Seat Prev" ? ("Currency = RUB; Category = Acquiring ; System type = Active") : (
                                        pld.dataKey === "Revenue Net Accumulated" || pld.dataKey === "Revenue Net Accumulated Prev" ? ("Currency = RUB; Day = Monday") : (
                                            pld.dataKey === "Discount Loyalty" || pld.dataKey === "Discount Loyalty Prev" ? ("Currency = RUB; Day = Friday, Saturday, Sunday; Guest Type = New Guest") : (
                                                pld.dataKey === "Avg Check Per Hour" || pld.dataKey === "Avg Check Per Hour Prev" ? ("Currency = RUB; Day Time = Night") : (
                                                    pld.dataKey === "Avg Check Per Table" || pld.dataKey === "Avg Check Per Table Prev" ? ("Currency = RUB; Day = Friday") : (
                                                        pld.dataKey === "CSI" || pld.dataKey === "CSI Prev" ? ("") : (
                                                            pld.dataKey === "Checks Count" || pld.dataKey === "Checks Count Prev" ? ("Day = Friday") : ("")
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                              )
                            )
                          )
                        )
                      )
                    }
                  </div>
                </div>
            ))}
          </div>
        </div>
      );
    }
  
    return null;
  };  

export default CustomTooltip;

