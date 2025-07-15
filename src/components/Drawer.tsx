"use client";

import DrawerLeftContent from "./DrawerLeftContent";
import DrawerRightContent from "./DrawerRightContent";

function Drawer({
  drawerId,
  drawerPosition = false,
}: {
  drawerId: string;
  drawerPosition?: boolean;
}) {
  return (
    <div
      className={
        `drawer w-auto 2xl:drawer-open absolute top-0` +
        (drawerPosition ? ` drawer-end right-0` : "left-0")
      }
    >
      <input id={drawerId} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side">
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-100 text-base-content min-h-full w-72 p-4">
          {/* Sidebar content here */}
          {!drawerPosition && <DrawerLeftContent />}
          {drawerPosition && <DrawerRightContent />}
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
