import "./Chart.css"

import { TooltipProps } from 'recharts';
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>)  => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <div className="label">{label}</div>
        <div className="intro">
          {payload.map((pld) => (
            <div style={{ color: pld.color, display: "flex", alignItems: "left" }}>{pld.dataKey}: {pld.value}</div>
          ))}
        </div>
        <div className="desc">Total: {payload[0].value}</div>
      </div>
    );
  }

  return null;
};

// const CustomTooltip = () => {
//     return (
//       <div className="custom-tooltip">
//         <div className="label">Label</div>
//         <div className="intro">Test</div>
//         <div className="desc">Anything you want can be displayed here.</div>
//       </div>
//     );
// };

export default CustomTooltip;

