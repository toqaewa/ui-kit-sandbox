import "./Chart.css"

import { TooltipProps } from 'recharts';
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

const VALUE_SUFFIXES: Record<string, string> = {
  "Revenue Net": "₽",
  "Revenue Net Prev": "₽",
  "Avg Check Per Guest": "₽",
  "Avg Check Per Guest Prev": "₽",
  "Income Accumulated": "₽",
  "Income Accumulated Prev": "₽",
  "Profit Gross Per M²": "₽",
  "Profit Gross Per M² Prev": "₽",
  "Revenue Gross": "₽",
  "Revenue Gross Prev": "₽",
  "Profit": "₽",
  "Profit Prev": "₽",
  "Expense Per Seat": "₽",
  "Expense Per Seat Prev": "₽",
  "Revenue Net Accumulated": "₽",
  "Revenue Net Accumulated Prev": "₽",
  "Discount Loyalty": "₽",
  "Discount Loyalty Prev": "₽",
  "Avg Check Per Hour": "₽",
  "Avg Check Per Hour Prev": "₽",
  "Avg Check Per Table": "₽",
  "Avg Check Per Table Prev": "₽",
  
  "CSI": "pts",
  "CSI Prev": "pts",
  "Checks Count": "",
  "Checks Count Prev": ""
};

const VALUE_DESCRIPTIONS: Record<string, string> = {
  "Revenue Net": "Currency = RUB; Pay Type = Cash; Day Time = Evening, Night",
  
  "Avg Check Per Guest": "Currency = RUB; Loyalty Program = With Loyalty Program; Guest Type = Returning Guest",
  
  "Income Accumulated": "Currency = RUB; Category = Merch, Consulting, Catering; Account Type = Bank Account",
  
  "Profit Gross Per M²": "Currency = RUB; Product Category = Hookahs; Day Time = Morning; Day = Weekdays",
  
  "Revenue Gross": "Currency = RUB; Day Time = Night",
  
  "Profit": "Currency = RUB; Day = Friday",
  
  "Expense Per Seat": "Currency = RUB; Category = Acquiring; System type = Active",
  
  "Revenue Net Accumulated": "Currency = RUB; Day = Monday",
  
  "Discount Loyalty": "Currency = RUB; Day = Friday, Saturday, Sunday; Guest Type = New Guest",
  
  "Avg Check Per Hour": "Currency = RUB; Day Time = Night",
  
  "Avg Check Per Table": "Currency = RUB; Day = Friday",
  
  "CSI": "",
  
  "Checks Count": "Day = Friday",
};

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
                    {pld.dataKey ? VALUE_SUFFIXES[pld.dataKey] ?? "" : ""}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", width: 290, textAlign: "left", fontSize: "10px", lineHeight: "14px" }}>
                  {pld.dataKey ? VALUE_DESCRIPTIONS[pld.dataKey] ?? "" : ""}
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

