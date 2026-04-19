// Sample Courses Data - Indian Instructors with ₹ Currency
const coursesData = [
    {
        id: 1,
        title: 'React.js Masterclass',
        category: 'Web Development',
        instructor: 'Raj Kumar (Trivandrum)',
        rating: 4.8,
        reviews: 2456,
        students: 15000,
        price: 2499,
        level: 'Intermediate',
        duration: '40 hours',
        emoji: '⚛️',
        bgColor: '#6366f1',
        description: 'Master React.js and build scalable web applications with this comprehensive course.',
        skills: ['React Hooks', 'State Management', 'Component Design', 'API Integration', 'Testing']
    },
    {
        id: 2,
        title: 'Web Design Fundamentals',
        category: 'UI/UX Design',
        instructor: 'Priya Sharma (Mumbai)',
        rating: 4.9,
        reviews: 1820,
        students: 12000,
        price: 1999,
        level: 'Beginner',
        duration: '30 hours',
        emoji: '🎨',
        bgColor: '#ec4899',
        description: 'Learn the principles of web design and create beautiful, user-friendly interfaces.',
        skills: ['Design Principles', 'Wireframing', 'Prototyping', 'Figma', 'User Research']
    },
    {
        id: 3,
        title: 'Python for Data Science',
        category: 'Data Science',
        instructor: 'Dr. Vikram Patel (Bangalore)',
        rating: 4.7,
        reviews: 3120,
        students: 18000,
        price: 2999,
        level: 'Intermediate',
        duration: '50 hours',
        emoji: '📊',
        bgColor: '#10b981',
        description: 'Analyze data and build machine learning models using Python.',
        skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Data Analysis']
    },
    {
        id: 4,
        title: 'JavaScript Complete Guide',
        category: 'Web Development',
        instructor: 'Anirudh Kapoor (Delhi)',
        rating: 4.8,
        reviews: 4050,
        students: 22000,
        price: 2249,
        level: 'Beginner',
        duration: '35 hours',
        emoji: '💛',
        bgColor: '#f59e0b',
        description: 'From basics to advanced: master JavaScript and become a web developer.',
        skills: ['ES6+', 'DOM Manipulation', 'Async Programming', 'OOP', 'REST APIs']
    },
    {
        id: 5,
        title: 'AWS Cloud Fundamentals',
        category: 'Cloud Computing',
        instructor: 'Sunil Mishra (Hyderabad)',
        rating: 4.6,
        reviews: 1650,
        students: 9000,
        price: 2749,
        level: 'Intermediate',
        duration: '45 hours',
        emoji: '☁️',
        bgColor: '#ff6b6b',
        description: 'Understand AWS services and deploy scalable applications on the cloud.',
        skills: ['EC2', 'S3', 'Lambda', 'RDS', 'VPC']
    },
    {
        id: 6,
        title: 'iOS App Development',
        category: 'Mobile App',
        instructor: 'Leena Rathod (Pune)',
        rating: 4.7,
        reviews: 950,
        students: 6500,
        price: 3249,
        level: 'Advanced',
        duration: '55 hours',
        emoji: '📱',
        bgColor: '#a78bfa',
        description: 'Build professional iOS applications with Swift and SwiftUI.',
        skills: ['Swift', 'SwiftUI', 'Core Data', 'Networking', 'App Store']
    },
    {
        id: 7,
        title: 'Cybersecurity Essentials',
        category: 'Cybersecurity',
        instructor: 'Ajay Sharma (Chennai)',
        rating: 4.9,
        reviews: 1420,
        students: 7800,
        price: 0,
        level: 'Beginner',
        duration: '25 hours',
        emoji: '🔒',
        bgColor: '#ef4444',
        description: 'Learn cybersecurity basics and protect yourself online.',
        skills: ['Network Security', 'Encryption', 'Threat Detection', 'Compliance', 'Ethical Hacking']
    },
    {
        id: 8,
        title: 'Flutter App Development',
        category: 'Mobile App',
        instructor: 'Christian Shah (Ahmedabad)',
        rating: 4.7,
        reviews: 820,
        students: 5200,
        price: 2499,
        level: 'Intermediate',
        duration: '42 hours',
        emoji: '🦋',
        bgColor: '#06b6d4',
        description: 'Develop cross-platform mobile apps with Flutter.',
        skills: ['Dart', 'Widgets', 'State Management', 'Firebase', 'Publishing']
    },
    {
        id: 9,
        title: 'Advanced Python Programming',
        category: 'Web Development',
        instructor: 'Pradeep Verma (Noida)',
        rating: 4.6,
        reviews: 1540,
        students: 8900,
        price: 0,
        level: 'Advanced',
        duration: '48 hours',
        emoji: '🐍',
        bgColor: '#36b9cc',
        description: 'Master advanced Python concepts and build robust applications.',
        skills: ['Decorators', 'Metaclasses', 'Multithreading', 'Testing', 'Optimization']
    }
];

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
    const app = new ELearningApp();
    app.init();
});

class ELearningApp {
    constructor() {
        this.courses = coursesData;
        this.filteredCourses = [...this.courses];
        this.currentFilter = {
            category: '',
            price: '',
            search: ''
        };
    }

    init() {
        this.cacheElements();
        this.attachEventListeners();
        this.renderCourses();
        this.attachCategoryFilters();
        this.setupScrollNavigation();
        this.loadRememberedUser();
    }

    loadRememberedUser() {
        const savedEmail = localStorage.getItem('userEmail');
        if (savedEmail) {
            this.loginBtn.textContent = savedEmail.split('@')[0].toUpperCase();
            this.loginBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        }
    }

    cacheElements() {
        // Search and Filter Elements
        this.searchInput = document.getElementById('searchInput');
        this.courseSearch = document.getElementById('courseSearch');
        this.categoryFilter = document.getElementById('categoryFilter');
        this.priceFilter = document.getElementById('priceFilter');
        this.coursesGrid = document.getElementById('coursesGrid');

        // Modal Elements
        this.modal = document.getElementById('courseModal');
        this.loginModal = document.getElementById('loginModal');
        this.closeBtn = document.querySelectorAll('.close');

        // Login Elements
        this.loginForm = document.getElementById('loginForm');
        this.loginEmail = document.getElementById('loginEmail');
        this.loginPassword = document.getElementById('loginPassword');
        this.rememberMe = document.getElementById('rememberMe');

        // Newsletter
        this.emailInput = document.getElementById('emailInput');
        this.subscribeBtn = document.querySelector('.subscribe-btn');
        this.subscribeMessage = document.getElementById('subscribeMessage');

        // Navigation
        this.navLinks = document.querySelectorAll('.nav-link');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.loginBtn = document.querySelector('.login-btn');

        // Search Button
        this.searchBtn = document.querySelector('.search-btn');
    }

    attachEventListeners() {
        // Header search
        this.searchBtn.addEventListener('click', () => this.handleHeaderSearch());
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleHeaderSearch();
        });

        // Course search and filters
        this.courseSearch.addEventListener('input', () => this.applyFilters());
        this.categoryFilter.addEventListener('change', () => this.applyFilters());
        this.priceFilter.addEventListener('change', () => this.applyFilters());

        // Modal close buttons
        this.closeBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target.closest('#courseModal')) {
                    this.closeModal();
                } else if (e.target.closest('#loginModal')) {
                    this.closeLoginModal();
                }
            });
        });

        // Close modal on background click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });

        this.loginModal.addEventListener('click', (e) => {
            if (e.target === this.loginModal) this.closeLoginModal();
        });

        // Newsletter
        this.subscribeBtn.addEventListener('click', () => this.subscribe());
        this.emailInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.subscribe();
        });

        // Navigation
        this.hamburger?.addEventListener('click', () => this.toggleMobileMenu());
        this.loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.openLoginModal();
        });

        // Login Form
        this.loginForm.addEventListener('submit', (e) => this.handleLoginSubmit(e));
    }

    attachCategoryFilters() {
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                this.categoryFilter.value = category;
                this.applyFilters();
                document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    handleHeaderSearch() {
        const searchTerm = this.searchInput.value.trim();
        if (searchTerm) {
            this.courseSearch.value = searchTerm;
            this.applyFilters();
            document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
        }
    }

    applyFilters() {
        const search = this.courseSearch.value.toLowerCase();
        const category = this.categoryFilter.value;
        const price = this.priceFilter.value;

        this.filteredCourses = this.courses.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(search) ||
                                course.instructor.toLowerCase().includes(search) ||
                                course.description.toLowerCase().includes(search);
            
            const matchesCategory = !category || course.category === category;
            
            const matchesPrice = !price || 
                                (price === 'free' && course.price === 0) ||
                                (price === 'paid' && course.price > 0);

            return matchesSearch && matchesCategory && matchesPrice;
        });

        this.renderCourses();
    }

    renderCourses() {
        this.coursesGrid.innerHTML = '';

        if (this.filteredCourses.length === 0) {
            this.coursesGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #6b7280;">No courses found. Try different filters.</div>';
            return;
        }

        this.filteredCourses.forEach(course => {
            const courseCard = this.createCourseCard(course);
            this.coursesGrid.appendChild(courseCard);
        });
    }

    createCourseCard(course) {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="course-image" style="background: linear-gradient(135deg, ${course.bgColor} 0%, ${course.bgColor}dd 100%);">
                <span class="course-emoji">${course.emoji}</span>
            </div>
            <div class="course-content">
                <span class="course-category">${course.category}</span>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-instructor">by ${course.instructor}</p>
                <div class="course-meta">
                    <span class="course-rating">⭐ ${course.rating} (${course.reviews})</span>
                    <span class="course-students">${(course.students / 1000).toFixed(0)}K students</span>
                </div>
                <div class="course-footer">
                    <span class="course-price">${course.price === 0 ? 'Free' : '₹' + course.price}</span>
                    <span class="course-level">${course.level}</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => this.openModal(course));
        return card;
    }

    openModal(course) {
        document.getElementById('modalTitle').textContent = course.title;
        document.getElementById('modalImage').style.background = `linear-gradient(135deg, ${course.bgColor} 0%, ${course.bgColor}dd 100%)`;
        document.getElementById('modalImage').innerHTML = `<span style="font-size: 120px;">${course.emoji}</span>`;
        document.getElementById('modalInstructor').textContent = `Instructor: ${course.instructor}`;
        document.getElementById('modalRating').textContent = `⭐ ${course.rating} (${course.reviews} reviews)`;
        document.getElementById('modalDescription').textContent = course.description;
        document.getElementById('modalPrice').textContent = course.price === 0 ? 'Free' : '₹' + course.price;
        document.getElementById('modalDuration').textContent = course.duration;
        document.getElementById('modalStudents').textContent = (course.students / 1000).toFixed(0) + 'K';
        document.getElementById('modalLevel').textContent = course.level;

        const skillsList = document.getElementById('modalSkills');
        skillsList.innerHTML = '';
        course.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        const enrollBtn = document.querySelector('.enroll-btn');
        enrollBtn.onclick = () => this.handleEnroll(course);

        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    openLoginModal() {
        this.loginModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        this.loginEmail.focus();
    }

    closeLoginModal() {
        this.loginModal.classList.remove('show');
        document.body.style.overflow = 'auto';
        this.loginForm.reset();
    }

    handleLoginSubmit(e) {
        e.preventDefault();

        const email = this.loginEmail.value.trim();
        const password = this.loginPassword.value;

        // Validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        if (!this.isValidEmail(email)) {
            alert('Please enter a valid email');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters');
            return;
        }

        // Simulate login (frontend only)
        const userData = {
            email: email,
            rememberMe: this.rememberMe.checked,
            loginTime: new Date().toLocaleString()
        };

        // Save to localStorage if remember me is checked
        if (this.rememberMe.checked) {
            localStorage.setItem('userEmail', email);
        }

        // Show success message
        alert(`✅ Login successful!\\n\\nWelcome, ${email}!\\n\\nYou can now access all premium courses.`);
        
        // Update UI to show logged in state
        this.loginBtn.textContent = email.split('@')[0].toUpperCase();
        this.loginBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        this.closeLoginModal();
    }

    subscribe() {
        const email = this.emailInput.value.trim();
        
        if (!email) {
            this.showMessage('Please enter your email', false);
            return;
        }

        if (!this.isValidEmail(email)) {
            this.showMessage('Please enter a valid email', false);
            return;
        }

        // Simulate API call
        setTimeout(() => {
            this.showMessage('✅ Successfully subscribed! Check your email.', true);
            this.emailInput.value = '';
        }, 500);
    }

    showMessage(text, isSuccess) {
        this.subscribeMessage.textContent = text;
        this.subscribeMessage.className = isSuccess ? 'message success' : 'message error';
        this.subscribeMessage.style.display = 'block';

        setTimeout(() => {
            this.subscribeMessage.style.display = 'none';
        }, 3000);
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    handleEnroll(course) {
        alert(`✅ Successfully enrolled in "${course.title}"!\\n\\nYou can now access all course materials.`);
        this.closeModal();
    }

    toggleMobileMenu() {
        this.navMenu?.classList.toggle('active');
    }

    setupScrollNavigation() {
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            this.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href')?.includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }
}
