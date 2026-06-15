import { memo } from "react";
import Button from "../common/Button.jsx";
import Badge from "../common/Badge.jsx";

function GenericResultCard({ item, type, onBook }) {
  const isBus = type === "bus";
  const isTrain = type === "train";

  return (
    <article className="card-premium flex flex-col md:flex-row md:items-center gap-4" aria-label={`${isBus ? item.operator : item.name} from ${item.from} to ${item.to}`}>
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-slate-900">
            {isBus ? item.operator : item.name}
          </span>
          {isTrain && <Badge variant="neutral">{item.number}</Badge>}
          <Badge variant="neutral">{isBus ? item.type : item.class}</Badge>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div>
            <p className="font-semibold text-lg">{item.departTime}</p>
            <p className="text-slate-500">{item.from}</p>
          </div>
          <div className="flex-1 flex items-center gap-2 text-slate-400">
            <div className="flex-1 border-t border-dashed border-slate-300" />
            <span className="text-xs">{item.duration}</span>
            <div className="flex-1 border-t border-dashed border-slate-300" />
          </div>
          <div>
            <p className="font-semibold text-lg">{item.arriveTime}</p>
            <p className="text-slate-500">{item.to}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 md:flex-col md:items-end">
        <p className="font-display font-bold text-2xl text-brand-700">₹{item.price.toLocaleString()}</p>
        <Button onClick={() => onBook?.(item)} className="!px-5 !py-2 text-sm">Book Now</Button>
      </div>
    </article>
  );
}

export default memo(GenericResultCard);
