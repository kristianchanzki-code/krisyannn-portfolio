import { Check, CircleDollarSign, Laptop, PackageCheck, Smartphone } from "lucide-react";

export function WorkbenchVisual() {
  return (
    <div className="workbench" aria-label="Illustrated digital workbench">
      <div className="workbench-grid" />
      <div className="workbench-card card-main">
        <div className="mini-window-bar"><span /><span /><span /></div>
        <div className="mini-dashboard">
          <div className="mini-sidebar">
            <span className="mini-logo">KB</span>
            <i /><i /><i /><i />
          </div>
          <div className="mini-content">
            <span className="mini-kicker">TODAY&apos;S WORKBENCH</span>
            <strong>Make the messy clearer.</strong>
            <div className="mini-stats">
              <span><PackageCheck size={15} /> Tracked</span>
              <span><Check size={15} /> Resolved</span>
            </div>
            <div className="mini-lines"><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <div className="workbench-note note-one">
        <span>field note</span>
        <strong>Start with the real workflow.</strong>
      </div>
      <div className="workbench-note note-two">
        <Smartphone size={20} />
        <span>POS → record → repair</span>
      </div>
      <div className="workbench-coin"><CircleDollarSign size={26} /></div>
      <div className="workbench-laptop"><Laptop size={29} /></div>
      <div className="status-stamp">BUILT WITH CARE</div>
    </div>
  );
}
