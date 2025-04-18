
// Information about the class diagram model for the E-Learning System
// This would typically be visualized with a UML tool, but we describe it here for reference

export const classDiagramDescription = `
# EduArch System Class Diagram

## Core Domain Classes

### User
- Attributes:
  - id: string
  - name: string
  - email: string
  - role: UserRole
- Relationships:
  - A User can be enrolled in many Courses (if Student)
  - A User can teach many Courses (if Teacher)
  - A User can submit many Assignments (if Student)
  - A User can receive many Notifications

### Course
- Attributes:
  - id: string
  - title: string
  - description: string
  - teacherId: string
  - status: CourseStatus
  - createdAt: Date
  - updatedAt: Date
- Relationships:
  - A Course is taught by one User (Teacher)
  - A Course has many Modules
  - A Course can have many Students enrolled

### Module
- Attributes:
  - id: string
  - title: string
  - description: string
  - courseId: string
  - order: number
- Relationships:
  - A Module belongs to one Course
  - A Module has many Materials
  - A Module has many Assignments

### Material
- Attributes:
  - id: string
  - title: string
  - type: MaterialType
  - content: string
  - moduleId: string
  - order: number
- Relationships:
  - A Material belongs to one Module

### Assignment
- Attributes:
  - id: string
  - title: string
  - description: string
  - dueDate: Date
  - moduleId: string
  - totalPoints: number
- Relationships:
  - An Assignment belongs to one Module
  - An Assignment has many Submissions

### Submission
- Attributes:
  - id: string
  - studentId: string
  - assignmentId: string
  - content: string
  - submittedAt: Date
  - grade?: number
  - feedback?: string
- Relationships:
  - A Submission is made by one User (Student)
  - A Submission belongs to one Assignment

### Enrollment
- Attributes:
  - id: string
  - studentId: string
  - courseId: string
  - enrolledAt: Date
  - status: EnrollmentStatus
  - progress: number
- Relationships:
  - An Enrollment connects one User (Student) to one Course

### Notification
- Attributes:
  - id: string
  - userId: string
  - title: string
  - message: string
  - type: NotificationType
  - isRead: boolean
  - createdAt: Date
- Relationships:
  - A Notification belongs to one User

### Event
- Attributes:
  - id: string
  - title: string
  - description?: string
  - startTime: Date
  - endTime: Date
  - location?: string
  - courseId?: string
  - users: string[] // Array of user IDs
- Relationships:
  - An Event can be associated with one Course
  - An Event can involve many Users

## Enumerations

### UserRole
- STUDENT
- TEACHER
- ADMIN

### CourseStatus
- DRAFT
- ACTIVE
- ARCHIVED

### MaterialType
- TEXT
- VIDEO
- PDF
- LINK

### EnrollmentStatus
- ACTIVE
- COMPLETED
- DROPPED

### NotificationType
- ANNOUNCEMENT
- ASSIGNMENT
- GRADE
- SYSTEM

## Design Patterns

### Creational Patterns
- Factory Method: UserFactory creates different types of users
- Builder: CourseBuilder for constructing complex course objects

### Structural Patterns
- Adapter: NotificationAdapter integrates external notification services
- Decorator: CourseDecorator adds additional features to courses
- Facade: EducationSystemFacade provides a simplified interface

### Behavioral Patterns
- Observer: Notification system for course events
- Strategy: GradingStrategy for different grading methods
- Command: AssignmentSubmissionCommand for handling submissions

## GRASP Patterns
- Controller: CourseController coordinates actions
- Information Expert: Classes handle responsibilities they have information for
- Creator: Classes create objects they contain
- High Cohesion: Classes have focused, related responsibilities

## SOLID Principles
- Single Responsibility: Each class has one reason to change
- Open/Closed: Classes can be extended without modification
- Liskov Substitution: Subtypes can be used in place of their base types
- Interface Segregation: Clients only depend on methods they use
- Dependency Inversion: High-level modules depend on abstractions

## OCL Constraints
- User Role Constraint: Users must have exactly one valid role
- Course Status Constraint: Courses must have a valid status
- Submission Constraint: Students can only submit once per assignment
- Grade Range Constraint: Grades must be within valid range
`;

export const databaseModelDescription = `
# Database Conceptual Model

## Tables

### Users
- id (PK)
- name
- email
- role
- created_at
- updated_at

### Courses
- id (PK)
- title
- description
- teacher_id (FK -> Users.id)
- status
- created_at
- updated_at

### Modules
- id (PK)
- course_id (FK -> Courses.id)
- title
- description
- order
- created_at
- updated_at

### Materials
- id (PK)
- module_id (FK -> Modules.id)
- title
- type
- content
- order
- created_at
- updated_at

### Assignments
- id (PK)
- module_id (FK -> Modules.id)
- title
- description
- due_date
- total_points
- created_at
- updated_at

### Submissions
- id (PK)
- assignment_id (FK -> Assignments.id)
- student_id (FK -> Users.id)
- content
- submitted_at
- grade
- feedback
- created_at
- updated_at

### Enrollments
- id (PK)
- course_id (FK -> Courses.id)
- student_id (FK -> Users.id)
- status
- progress
- enrolled_at
- updated_at

### Notifications
- id (PK)
- user_id (FK -> Users.id)
- title
- message
- type
- is_read
- created_at

### Events
- id (PK)
- title
- description
- start_time
- end_time
- location
- course_id (FK -> Courses.id, nullable)
- created_at
- updated_at

### EventUsers (Junction table)
- event_id (FK -> Events.id)
- user_id (FK -> Users.id)

## Relationships
- One-to-Many: Users -> Courses (A teacher can teach multiple courses)
- One-to-Many: Courses -> Modules
- One-to-Many: Modules -> Materials
- One-to-Many: Modules -> Assignments
- One-to-Many: Assignments -> Submissions
- One-to-Many: Users -> Notifications
- Many-to-Many: Users <-> Courses (through Enrollments)
- Many-to-Many: Users <-> Events (through EventUsers)
`;
