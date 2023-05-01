
package com.testpyramid.airport;

import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class FlightTest {

    @Test
    public void testFlightCreation() {
        Flight flight = new Flight("AA123", 100);
        assertNotNull(flight);
    }

    @Test
    public void testInvalidFlightNumber() {
        assertThrows(RuntimeException.class,
                ()->{
                    Flight flight = new Flight("AA12", 100);
                });
        assertThrows(RuntimeException.class,
                ()->{
                    Flight flight = new Flight("AA12345", 100);
                });
    }

    @Test
    public void testValidFlightNumber() {
        Flight flight = new Flight("AA345", 100);
        assertNotNull(flight);
        flight = new Flight("AA3456", 100);
        assertNotNull(flight);
    }

    @Test
    public void testAddPassengers() throws IOException {
        Flight flight = FlightBuilderUtil.buildFlightFromCsv();
        assertEquals(50, flight.getPassengersNumber());
        assertThrows(RuntimeException.class,
                ()->{
                    flight.addPassenger(new Passenger("124-56-7890", "Michael Johnson", "US"));
                });
    }

    @Test
    public void testAddRemovePassengers() throws IOException {
        Flight flight = FlightBuilderUtil.buildFlightFromCsv();
        flight.setSeats(51);
        Passenger additionalPassenger = new Passenger("124-56-7890", "Michael Johnson", "US");
        flight.addPassenger(additionalPassenger);
        assertEquals(51, flight.getPassengersNumber());
        flight.removePassenger(additionalPassenger);
        assertEquals(50, flight.getPassengersNumber());
        assertEquals(51, flight.getSeats());
    }

    @Test
    public void testSetInvalidSeats() throws IOException {
        Flight flight = FlightBuilderUtil.buildFlightFromCsv();
        assertEquals(50, flight.getPassengersNumber());
        assertThrows(RuntimeException.class,
                ()->{
                    flight.setSeats(49);
                });
    }

    @Test
    public void testSetValidSeats() throws IOException {
        Flight flight = FlightBuilderUtil.buildFlightFromCsv();
        assertEquals(50, flight.getPassengersNumber());
        flight.setSeats(52);
        assertEquals(52, flight.getSeats());
    }

    @Test
    public void testChangeOrigin() {
        Flight flight = new Flight("AA1234", 50);
        flight.setOrigin("London");
        flight.setDestination("Bucharest");
        flight.takeOff();
        assertEquals(true, flight.isFlying());
        assertEquals(true, flight.isTakenOff());
        assertEquals(false, flight.isLanded());
        assertThrows(RuntimeException.class,
                ()->{
                    flight.setOrigin("Manchester");
                });
    }

    @Test
    public void testLand() {
        Flight flight = new Flight("AA1234", 50);
        flight.setOrigin("London");
        flight.setDestination("Bucharest");
        flight.takeOff();
        assertEquals(true, flight.isTakenOff());
        assertEquals(false, flight.isLanded());
        flight.land();
        assertEquals(true, flight.isTakenOff());
        assertEquals(true, flight.isLanded());
        assertEquals(false, flight.isFlying());
    }

    @Test
    public void testChangeDestination() {
        Flight flight = new Flight("AA1234", 50);
        flight.setOrigin("London");
        flight.setDestination("Bucharest");
        flight.takeOff();
        flight.land();
        assertThrows(RuntimeException.class,
                ()->{
                    flight.setDestination("Sibiu");
                });

    }
}
