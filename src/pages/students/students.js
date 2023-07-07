import { CustomTable } from "../../components/CustomTable";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Typography,
    Card,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";

export const Students = () => {
    return (
        <div className="">
            <div className="mb-3">
                <Typography variant='h3'>
                    Estudiantes
                </Typography>
            </div>
            <Tabs value="students">
                <TabsHeader>
                    {
                        tabs.map((value, index) => (
                            <Tab key={index} value={value.val}>
                                {
                                    value.tab
                                }
                            </Tab>
                        ))
                    }
                </TabsHeader>
                <TabsBody>
                    {
                        tabs.map((value, index) => (
                            <TabPanel key={index} value={value.val}>
                                {
                                    value.content
                                }
                            </TabPanel>
                        ))
                    }
                </TabsBody>
            </Tabs>

        </div>
    );
}

const AddStudentForm = () => {
    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Crear usuario
            </Typography>
            <Typography color="gray" className="my-2 font-normal">
                Ingresa los datos del estudiante.
            </Typography>
            <div className="mb-4 grid grid-cols-4 gap-4">
                <div className="col-span-4 md:col-span-2">
                    <Input type="text" size="lg" label="Matricula" />
                </div>
                <div className="col-span-4 md:col-span-2">
                    <Input type="text" size="lg" label="Nombres" />
                </div>
                <div className="col-span-4 md:col-span-2">
                    <Input type="text" size="lg" label="Apellidos" />
                </div>
                <div className="col-span-4 md:col-span-2">
                    <Input size="lg" label="Telefono" />
                </div>
                <div className="col-span-4 md:col-span-2">
                    <Input size="lg" label="Escuela" />
                </div>
                <div className="col-span-4 md:col-span-2">
                    <Input size="lg" label="Padre" />
                </div>
                <div className="col-span-4 md:col-span-2">
                    <Input size="lg" label="Horario" />
                </div>
            </div>
            <Button className="mt-6 w-52">
                Añadir usuario
            </Button>
        </Card>
    );
}

const tabs = [
    {
        tab: 'Estudiantes',
        val: 'students',
        content: <CustomTable />
    },
    {
        tab: 'Agregar',
        val: 'add',
        content: <AddStudentForm />
    }
]