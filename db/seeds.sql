INSERT INTO department (name)
    VALUES
        ('Front Desk'),
        ('Housekeeping'),
        ('Engineering');;

INSERT INTO role (title, salary, department_id)
    VALUES
        ('Front Desk Associate', 25000, 1),
        ('Front Desk Manager', 50000, 1),
        ('Housekeeping', 28000, 2),
        ('Housekeeping Manager', 65000, 2),
        ('Technician', 32000, 3),
        ('Chief Engineer', 85000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ('Charle', 'Smith', 1, 2),
        ('Rebaca', 'Turner', 1, 2),
        ('Peter', 'Front', 2, NULL),
        ('Sandra', 'Ramirez', 3, 4),
        ('Noelli', 'Moore', 3, 4),
        ('Jessica', 'Bone', 4, NULL),
        ('Randy', 'Douglas', 5, 6),
        ('Said', 'Moreno', 5, 6),
        ('David', 'Burge', 6, NULL);