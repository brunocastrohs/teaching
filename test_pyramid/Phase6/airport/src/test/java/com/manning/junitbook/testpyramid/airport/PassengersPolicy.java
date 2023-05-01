
package com.testpyramid.airport;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class PassengersPolicy {
    private Flight flight;
    private List<Passenger> regularPassengers = new ArrayList<>();
    private List<Passenger> vipPassengers = new ArrayList<>();
    private Flight anotherFlight = new Flight("AA7890", 48);

    @Given("^there is a flight having number \"([^\"]*)\" and (\\d+) seats with passengers defined into \"([^\"]*)\"$")
    public void there_is_a_flight_having_number_and_seats_with_passengers_defined_into(String flightNumber, int seats, String fileName) throws Throwable {
        flight = FlightBuilderUtil.buildFlightFromCsv(flightNumber, seats, "src/test/resources/" + fileName);
    }

    @When("^we have regular passengers$")
    public void we_have_regular_passengers() {
        for (Passenger passenger : flight.getPassengers()) {
            if (!passenger.isVip()) {
                regularPassengers.add(passenger);
            }
        }
    }

    @Then("^you can remove them from the flight$")
    public void you_can_remove_them_from_the_flight() {
        for (Passenger passenger : regularPassengers) {
            assertTrue(flight.removePassenger(passenger));
        }
    }

    @Then("^add them to another flight$")
    public void add_them_to_another_flight() {
        for (Passenger passenger : regularPassengers) {
            assertTrue(anotherFlight.addPassenger(passenger));
        }
    }

    @When("^we have VIP passengers$")
    public void we_have_VIP_passengers() {
        for (Passenger passenger : flight.getPassengers()) {
            if (passenger.isVip()) {
                vipPassengers.add(passenger);
            }
        }
    }

    @Then("^you cannot remove them from the flight$")
    public void you_cannot_remove_them_from_the_flight() {
        for (Passenger passenger : vipPassengers) {
            assertFalse(flight.removePassenger(passenger));
        }
    }
}
