import Button from "../../components/Button";
import Input from "../../components/Input";
import { Column, Container, LoginContainer, Spacing, Title } from "./styles";

const Login = () => {
    return (
        <Container>
            <LoginContainer>
                <Column>
                    <Title>Login </Title>
                    < Spacing />
                    <Input name="email" placeholder="Usuário" />
                    <Spacing />
                    < Input name="password" placeholder="Senha" />
                    <Spacing />
                    < Button title="Entrar" />
                </Column>
            </LoginContainer>
        </Container>
    );
};

export default Login;