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
                      pld.dataKey === "Revenue Net" ? ("₽") : (
                        pld.dataKey === "Avg Check Per Guest" ? ("₽") : (
                          pld.dataKey === "Income Accumulated" ? ("₽") : (
                            pld.dataKey === "Profit Gross Per M²" ? ("₽") : (
                              pld.dataKey === "Revenue Gross" ? ("₽") : (
                                pld.dataKey === "Profit" ? ("₽") : (
                                    pld.dataKey === "Expense Per Seat" ? ("₽") : (
                                        pld.dataKey === "Revenue Net Accumulated" ? ("₽") : (
                                            pld.dataKey === "Discount Loyalty" ? ("₽") : (
                                                pld.dataKey === "Avg Check Per Hour" ? ("₽") : (
                                                    pld.dataKey === "Avg Check Per Table" ? ("₽") : (
                                                        pld.dataKey === "CSI" ? ("pts") : (
                                                            pld.dataKey === "Checks Count" ? ("") : ("")
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
                      pld.dataKey === "Revenue Net" ? ("Currency = RUB; Pay Type = Cash; Day Time = Evening, Night") : (
                        pld.dataKey === "Avg Check Per Guest" ? ("Currency = RUB; Loyalty Program = With Loyalty Program; Guest Type = Returning Guest") : (
                          pld.dataKey === "Income Accumulated" ? ("Currency = RUB; Category = Merch, Consulting, Catering; Account Type = Bank Account") : (
                            pld.dataKey === "Profit Gross Per M²" ? ("Currency = RUB; Product Category = Hookahs; Day Time = Morning; Day = Weekdays") : (
                              pld.dataKey === "Revenue Gross" ? ("Currency = RUB; Day Time = Night") : (
                                pld.dataKey === "Profit" ? ("Currency = RUB; Day = Friday") : (
                                    pld.dataKey === "Expense Per Seat" ? ("Currency = RUB; Category = Acquiring ; System type = Active") : (
                                        pld.dataKey === "Revenue Net Accumulated" ? ("Currency = RUB; Day = Monday") : (
                                            pld.dataKey === "Discount Loyalty" ? ("Currency = RUB; Day = Friday, Saturday, Sunday; Guest Type = New Guest") : (
                                                pld.dataKey === "Avg Check Per Hour" ? ("Currency = RUB; Day Time = Night") : (
                                                    pld.dataKey === "Avg Check Per Table" ? ("Currency = RUB; Day = Friday") : (
                                                        pld.dataKey === "CSI" ? ("") : (
                                                            pld.dataKey === "Checks Count" ? ("Day = Friday") : ("")
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

