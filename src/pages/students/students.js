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
    Select,
    Option,
    Button,
} from "@material-tailwind/react";
import { useFetch } from "../../services/useFetch";

export const Students = () => {
    const allStudents = useFetch('students');
    //const allSchools = useFetch('schools');

    const AddStudentForm = () => {
        return (
            <Card color="transparent" shadow={false}>
                <div className="flex">
                    <Typography className="flex-1" variant="h4" color="blue-gray">
                        Crear usuario
                    </Typography>
                    <div className="flex-1 text-end">
                        <Button>Carga masiva</Button>
                    </div>
                </div>
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
                        <Input size="lg" label="Email" />
                    </div>
                    <div className="col-span-4 md:col-span-2">
                    <Select size="md" label="Select Version">
                        {
                            //console.log(allSchools)
                        }
                    </Select>
                    </div>
                </div>
                <Button className="mt-6 w-52">
                    Añadir usuario
                </Button>
            </Card>
        );
    }

    const StudentsTable = () =>  {
        const tableHeaders = [
            'Id', 'Matricula', 'Nombres', 'Apellidos', 'Acciones'
        ]

        return (
            <Card className="overflow-scroll h-full w-full">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {
                                tableHeaders.map((head) => (
                                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allStudents.data?.map(({id_student, student_mat, student_name, student_last_name }, index) => {
                            const isLast = index === allStudents.data.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={id_student}>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {id_student}
                                        </Typography>
                                    </td>
                                    <td className={`${classes} bg-blue-gray-50/50`}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {student_mat}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {student_name}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {student_last_name}
                                        </Typography>
                                    </td>
                                    <td className={`${classes} bg-blue-gray-50/50`}>
                                        <Typography as="button" href="#" variant="small" color="blue" className="font-medium">
                                            Editar
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        );
    }

    const tabs = [
        {
            tab: 'Estudiantes',
            val: 'students',
            content: <StudentsTable />
        },
        {
            tab: 'Agregar',
            val: 'add',
            content: <AddStudentForm />
        }
    ]
    return (
        <div className="">
            <div className="mb-3 flex">
                <Typography className="flex-1" variant='h3'>
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