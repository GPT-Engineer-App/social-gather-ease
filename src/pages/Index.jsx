import { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Box, IconButton, Image, Divider, Checkbox, Stack, Select } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaMoneyBillWave, FaGamepad, FaGift } from "react-icons/fa";

const Index = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [attendees, setAttendees] = useState([]);
  const [newAttendee, setNewAttendee] = useState("");

  const addAttendee = () => {
    if (newAttendee) {
      setAttendees([...attendees, newAttendee]);
      setNewAttendee("");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Motive
        </Text>

        <Box width="100%">
          <Text fontSize="xl" mb={2}>
            Event Details
          </Text>
          <VStack spacing={4} align="stretch">
            <Input placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} />
            <HStack>
              <Input type="date" placeholder="Event Date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
              <IconButton aria-label="Select Date" icon={<FaCalendarAlt />} />
            </HStack>
            <HStack>
              <Input placeholder="Event Location" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
              <IconButton aria-label="Select Location" icon={<FaMapMarkerAlt />} />
            </HStack>
          </VStack>
        </Box>

        <Divider />

        <Box width="100%">
          <Text fontSize="xl" mb={2}>
            Attendees
          </Text>
          <VStack spacing={4} align="stretch">
            <HStack>
              <Input placeholder="Add Attendee" value={newAttendee} onChange={(e) => setNewAttendee(e.target.value)} />
              <Button onClick={addAttendee}>Add</Button>
            </HStack>
            <VStack align="stretch">
              {attendees.map((attendee, index) => (
                <HStack key={index} justifyContent="space-between">
                  <Text>{attendee}</Text>
                  <Checkbox>Confirmed</Checkbox>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Box>

        <Divider />

        <Box width="100%">
          <Text fontSize="xl" mb={2}>
            Additional Features
          </Text>
          <Stack spacing={4}>
            <HStack>
              <FaMoneyBillWave />
              <Text>Bill Splitting</Text>
            </HStack>
            <HStack>
              <FaGamepad />
              <Text>Nostalgic Games</Text>
            </HStack>
            <HStack>
              <FaGift />
              <Text>Affiliate Marketing</Text>
            </HStack>
          </Stack>
        </Box>

        <Divider />

        <Box width="100%">
          <Text fontSize="xl" mb={2}>
            Gamification
          </Text>
          <Select placeholder="Select Game">
            <option value="trivia">Trivia</option>
            <option value="scavenger_hunt">Scavenger Hunt</option>
            <option value="photo_contest">Photo Contest</option>
          </Select>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
