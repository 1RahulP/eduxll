import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";

export default function ModalBox() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-gray-500 text-white">
        Sign up
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create your account</ModalHeader>
              <ModalBody>
                <Input type="text" label="Full Name"  />
                <Input type="email" label="Email"  />
                <Input type="number" label="Phone No."  />
                <Input type="password" label="Password"  />
                <Input type="password" label="Confirm Password"  />
               
              </ModalBody>
              <ModalFooter>
                
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
                <p className="text-sm text-center mb-6">Already have an account? <span className="cursor-pointer text-blue-500">Login</span></p>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
