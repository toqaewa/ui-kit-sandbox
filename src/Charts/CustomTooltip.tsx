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

const PositiveDeltaIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11.447 4.11621C11.7029 4.16894 11.8962 4.39542 11.8962 4.66699V10.667C11.896 10.9773 11.6439 11.2291 11.3337 11.2295C11.0232 11.2295 10.7714 10.9775 10.7712 10.667V6.02441L5.06417 11.7314L4.97628 11.8037C4.75815 11.9477 4.46145 11.9232 4.26924 11.7314C4.04957 11.5118 4.04957 11.1552 4.26924 10.9355L9.9753 5.22949H5.3337C5.02316 5.22949 4.7714 4.97748 4.7712 4.66699C4.7712 4.35633 5.02304 4.10449 5.3337 4.10449H11.3337L11.447 4.11621Z" fill="currentColor"/>
  </svg>
)

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>)  => {
  if (active && payload && payload.length) {

    const hasPrevData = payload.some(p => String(p.dataKey).endsWith("Prev"));
    const dateText = label ? `${label}` : 'Jan 2024 - Apr 2025';
    const comparisonText = hasPrevData ? 'Previous period' : '';

    const filteredPayload = payload.filter(pld => {
      const dataKey = String(pld.dataKey);
      return !dataKey.endsWith("Prev");
    })

    return (
      <div className="extreme-custom-tooltip">
        {/* <div style={{ color: "#DCD8D3", fontSize: "12px", lineHeight: "16px", textAlign: "left" }}>Jan 2024 - Apr 2025</div> */}
        <div style={{ 
          color: "#DCD8D3", 
          fontSize: "12px", 
          lineHeight: "16px", 
          textAlign: "left",
          display: 'flex',
          gap: '4px',
          // justifyContent: 'space-between'
        }}>
          <span>{dateText}</span>
          {hasPrevData && <span><span style={{ color: "#777677" }}>Vs </span>{comparisonText}</span>}
        </div>
        <div className="desc" style={{ fontSize: "12px", lineHeight: "16px" }}>TIMELESS 54, TIMELESS 3</div>
        <div style={{display: "flex", flexDirection: "column", gap: 8, maxWidth: 290}}>
          {filteredPayload.map((pld) => {
            
            const baseKey = String(pld.dataKey);
            const prevKey = `${baseKey} Prev`;
            const prevItem = payload.find(p => String(p.dataKey) === prevKey);
            const prevValue = prevItem?.value;
            const baseValue = pld.value;
            const suffix = VALUE_SUFFIXES[baseKey] ?? "";

            let deltaElement = null;
            if (prevValue !== undefined && baseValue !== undefined) {
              const baseNum = Number(baseValue);
              const prevNum = Number(prevValue);
              
              if (prevNum === 0) {
                deltaElement = (
                  <span style={{ color: '#777677', marginLeft: '4px' }}>
                    Vs
                  </span>
                );
              } else {
                const delta = ((baseNum - prevNum) / prevNum) * 100;
                const absDelta = Math.abs(delta);
                const isPositive = delta >= 0;

                if (absDelta < 1) {
                  deltaElement = (
                    <span style={{ 
                      color: isPositive ? '#4CAF50' : '#F44336',
                      marginLeft: '4px'
                    }}>
                      &lt;1%
                    </span>
                  );
                } else {
                  const deltaFormatted = `${isPositive ? '+' : ''}${delta.toFixed(1)}%`;
                  deltaElement = (
                    <span style={{ 
                      color: isPositive ? '#4CAF50' : '#F44336',
                      marginLeft: '4px'
                    }}>
                      {isPositive ? '↗︎' : '↙︎'}{deltaFormatted}
                    </span>
                  );
                }
              }
            }

            return (
              <div style={{ display: "flex", flexDirection: "column" }} key={baseKey}>
                <div style={{ display: "flex", flexDirection: "column", width: 290 }}>
                  <div style={{ color: pld.color, display: "flex", alignItems: "left", gap: 4, width: 290, fontSize: "12px", lineHeight: "16px" }}>
                    <div style={{ background: pld.color, width: 8, height: 8, borderRadius: 2, marginTop: 3, marginBottom: 2 }}></div>
                    <div>{baseKey}</div>
                  </div>
                  <div style={{ 
                    color: "#DCD8D3", 
                    fontWeight: "bold", 
                    fontSize: "12px", 
                    lineHeight: "16px",
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                    {baseValue} {suffix}
                    {deltaElement}
                    {prevValue !== undefined && (
                      <span style={{ marginLeft: 4, color: '#777677' }}>
                        {prevValue} {suffix}
                      </span>
                    )}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", width: 290, textAlign: "left", fontSize: "10px", lineHeight: "14px" }}>
                  {VALUE_DESCRIPTIONS[baseKey] ?? ""}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};  

export default CustomTooltip;

