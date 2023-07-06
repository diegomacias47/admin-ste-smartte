import { Button } from "@material-tailwind/react";
import { DrawerComponent } from "./Drawer";
export const Header = () => {
    return (
        <header className="bg-dark">
            <div className="flex align-center py-3 container px-4">
                <DrawerComponent />
            </div>
        </header>
    );
}