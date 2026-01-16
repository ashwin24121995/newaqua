<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($pageTitle) ? $pageTitle . ' - AQUASTRUCT Casino' : 'AQUASTRUCT Casino - Premium Social Gaming'; ?></title>
    <meta name="description" content="AQUASTRUCT Casino - Experience premium social casino gaming with slots, poker, roulette, and more. Play for free with virtual currency.">
    <meta name="keywords" content="social casino, online games, slots, poker, roulette, free casino games">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="assets/favicon.png">
    
    <!-- Bootstrap 5.3 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Google Fonts - Poppins -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Custom Stylesheet -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <div class="container">
            <a class="navbar-brand" href="index.php">
                <img src="assets/aquastruct-logo.png" alt="AQUASTRUCT Casino" class="logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.php"><i class="fas fa-home me-1"></i> Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="games.php"><i class="fas fa-gamepad me-1"></i> Games</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="howtoplay.php"><i class="fas fa-question-circle me-1"></i> How to Play</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.php"><i class="fas fa-info-circle me-1"></i> About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.php"><i class="fas fa-envelope me-1"></i> Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link balance-display" href="#" id="balanceDisplay">
                            <i class="fas fa-coins me-1"></i> <span id="navBalance">10,000</span> Coins
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
