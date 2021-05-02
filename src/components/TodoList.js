import React from 'react';
import { Badge, HStack, IconButton, StackDivider, Text, VStack } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function TodoList({ todos, deleteTodo }) {

    if(!todos.length) {
        return (
            <Badge colorScheme="green" p="4" borderRadius="lg" >
                No Todos, yay!
            </Badge>
        )
    }

    return (
        <VStack
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px" p="4"
            borderRadius="lg"
            w="100%"
            maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}
        >
            {todos.map((todo) => (
                <HStack key={todo.id} justifyContent="space-between" width="100%">
                    <Text>{todo.body}</Text>
                    <IconButton icon={<FaTrash />} isRound="true" onClick={() => deleteTodo(todo.id)} />
                </HStack>
            ))}
        </VStack>
    );
}

export default TodoList;