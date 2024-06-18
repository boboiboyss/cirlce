import { api } from "@/libs/api";
import { Box, BoxProps, Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface IPropsRegister extends BoxProps {}

type RegisterForm = {
  email: string;
  password: string;
};

export default function SignUpForm(props: IPropsRegister) {
  const [form, setForm] = useState<RegisterForm>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const toast = useToast();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleSubmit() {
    try {
      await api.post("/auth/register", form);
      navigate("/auth/login");
      toast({
        title: "Register success!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Register failed!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <Box width={'400px'} display={"flex"} flexDirection={"column"} gap={"10px"} {...props}>
      <Text color={'white'} fontSize={'23px'}>Create account Circle</Text>
      <Input
        name="fullName"
        placeholder="Full Name *"
        color="white"
        onChange={handleChange}
      />
      <Input
        name="username"
        placeholder="Username *"
        color="white"
        onChange={handleChange}
      />
      <Input
        name="email"
        placeholder="Email *"
        color="white"
        onChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password *"
        color="white"
        onChange={handleChange}
      />
    <Button 
        onClick={handleSubmit} 
        backgroundColor={'#04A51E'} 
        color={'white'} 
        borderRadius={'15px'}
    >
        Register
    </Button>
    <Flex>
      <Text color={'white'} mr={'8px'}>Already have account?</Text> 
      <Link to={'/auth/login'}>
        <Text color={'#04A51E'}>Login</Text>
      </Link>
    </Flex>
    </Box>
  );
}
