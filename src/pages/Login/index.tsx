import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Column, Container, LoginContainer, Spacing, Title } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { defaultValues, IFormLogin } from "./types";

const schema = yup.object({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().min(6, "Mínimo 6 caracteres").required("Campo obrigatório"),
}).required();

const Login = () => {
    const {
        control,
        formState: { errors, isValid },
    } = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: defaultValues,
        reValidateMode: 'onChange',
    });

    const handleSubmit = () => {
        console.log("submetido");
    }

    return (
        <Container>
            <LoginContainer>
                <Column>
                    <Title>Login </Title>
                    < Spacing />
                    <Input
                        name="email"
                        value={control._defaultValues.email}
                        placeholder="Usuário"
                        control={control}
                        errorMessage={errors?.email?.message}
                    />
                    <Spacing />
                    < Input
                        type="password"
                        name="password"
                        value={control._defaultValues.password}
                        placeholder="Senha"
                        control={control}
                        errorMessage={errors?.password?.message}
                    />
                    <Spacing />
                    < Button title="Entrar" disabled={!isValid} onClick={handleSubmit} />
                </Column>
            </LoginContainer>
        </Container>
    );
};

export default Login;