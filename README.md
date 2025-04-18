
# EduArch Learning Management System

This project is an E-Learning and School Management System built with TypeScript, React, and an architecture that implements various design patterns, following the SOLID principles and GRASP patterns.

## Project Overview

EduArch is a comprehensive learning management system that enables educational institutions to:

- Manage courses, students, and teachers
- Create and grade assignments
- Track student progress
- Provide learning resources
- Send notifications for important events

## Design Patterns Implementation

This project implements various design patterns to create maintainable, extensible, and robust code.

### GoF Patterns

#### 1. Creational Pattern: Factory Method

**Implementation**: `src/patterns/creational/UserFactory.ts`

**Purpose**: Creates different types of users (Student, Teacher, Administrator) without specifying their concrete classes.

**Why this pattern?**: The Factory Method pattern is used for user creation because:
- It encapsulates the creation logic for different user types
- Adds flexibility to create new user types without modifying existing code
- Ensures consistent user object creation through a standardized interface

#### 2. Structural Pattern: Adapter

**Implementation**: `src/patterns/structural/NotificationAdapter.ts`

**Purpose**: Adapts external notification services (Email, SMS, Push Notification) to work with our internal notification system.

**Why this pattern?**: The Adapter pattern is perfect for notification services because:
- It allows integration with multiple third-party services using a unified interface
- External services can be replaced without affecting the core application
- New notification channels can be added by creating new adapters

#### 3. Structural Pattern: Decorator

**Implementation**: `src/patterns/structural/CourseDecorator.ts`

**Purpose**: Dynamically adds new behaviors to course objects, such as certificate generation, premium content, or time limitations.

**Why this pattern?**: The Decorator pattern enhances courses because:
- It allows for dynamic composition of course features at runtime
- Features can be combined in various ways without creating subclasses
- Course functionality can be extended without modifying the core course class

#### 4. Behavioral Pattern: Observer

**Implementation**: `src/patterns/behavioral/ObserverPattern.ts`

**Purpose**: Establishes a one-to-many dependency between course events and user notifications.

**Why this pattern?**: The Observer pattern is ideal for notifications because:
- It decouples course events (assignment creation, grade publishing) from notification logic
- Students can subscribe to courses and receive updates automatically
- Different notification types can be triggered based on specific events

### GRASP Patterns

#### 1. Controller

**Implementation**: `src/patterns/grasp/CourseController.ts`

**Purpose**: Coordinates system events between the UI and domain model for course management.

**Why this pattern?**: The Controller pattern:
- Separates UI logic from domain logic
- Centralizes course-related operations
- Enforces security and validation rules

#### 2. Information Expert

Implemented throughout the codebase by assigning responsibilities to classes that have the necessary information to fulfill them.

#### 3. Creator

Implemented in user and course creation processes, assigning the responsibility to create objects to classes that have the necessary information.

#### 4. High Cohesion

Applied by creating focused classes with closely related responsibilities (e.g., CourseManager, UserManager).

### SOLID Principles

#### 1. Single Responsibility Principle (SRP)

**Implementation**: `src/patterns/solid/SingleResponsibility.ts`

**Purpose**: Each class has only one reason to change.

**Example**: Instead of a monolithic CourseManager class that handles courses, users, assignments, and grading, we have separate classes for each responsibility.

#### 2. Open/Closed Principle (OCP)

Implemented in the decorator pattern for courses, allowing extension without modification.

#### 3. Liskov Substitution Principle (LSP)

Applied in the user hierarchy, where any subclass can be used wherever the parent class is expected.

#### 4. Interface Segregation Principle (ISP)

Implemented by creating focused interfaces for different responsibilities.

#### 5. Dependency Inversion Principle (DIP)

Applied throughout the codebase by depending on abstractions rather than concrete implementations.

## OCL Constraints

1. **User Role Constraint**: A user can only have one role at a time (Student, Teacher, or Admin).
2. **Course Status Constraint**: A course can only be in one status at a time (Draft, Active, or Archived).
3. **Assignment Submission**: A student can only submit one assignment per assignment object.
4. **Grade Range**: Grades must be between 0 and the total points value of the assignment.

## Database Conceptual Model

The conceptual model of this application includes:

1. **User**: Stores user information and role
2. **Course**: Contains course details and modules
3. **Module**: Contains learning materials and assignments
4. **Assignment**: Contains details and submissions
5. **Submission**: Stores student submissions and grades
6. **Enrollment**: Tracks student enrollment in courses
7. **Notification**: Stores notifications for users
8. **Event**: Calendar events related to courses

## How to Run the Project

1. Clone the repository
```
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Architecture Overview

The project follows a clean architecture with:

1. **Domain Layer**: Core entities and business logic
2. **Application Layer**: Use cases and application services
3. **Infrastructure Layer**: External services and adapters
4. **Presentation Layer**: React components and UI logic

## Testing

Run tests with:
```
npm test
```

## Future Enhancements

- Authentication and authorization
- Advanced analytics dashboard
- Integration with video conferencing
- Mobile application
- AI-powered learning recommendations

## License

This project is licensed under the MIT License - see the LICENSE file for details.
