import { Button, Typography } from "@material-tailwind/react";
import { DrawerComponent } from "./Drawer";
export const Header = () => {
    return (
        <header className="bg-darks box-shadow bg-white mb-2">
            <div className="flex items-center py-3 container mx-auto gap-6">
                <DrawerComponent />
                <Typography variant="h5">STE My Admin</Typography>
            </div>
        </header>
    );
}